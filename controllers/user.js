let Model = require('../models/index')
let bcrypt = require('bcrypt')
class User{
    static getPage(req, res){
        res.render("user-login.ejs")
    }
    static getAdminPage(req, res){
        if(!req.session.user){
            res.redirect('/user/login')
        }
        res.render("user-admin.ejs")
    }
    static getRegister(req, res){
        res.render("user-register.ejs")
    }
    static register(req, res){
        Model.User.create({
            name: req.body.name,
            email: req.body.email,
            password: 'bios'+req.body.name
        })
        .then(data =>{
            res.redirect("/user/login")
        })
        .catch(err => {
            res.send(err.message)
            res.redirect("/user/register")
        })
    }
    static login(req, res){
        let newData
        if(req.session){
            Model.User.findOne({
                where:{ email: req.body.email}
            })
            .then(data => {
                    newData = data
                if(data.role === "admin" && bcrypt.compareSync(req.body.password,data.password)){
                        req.session.user = {
                            id: data.id,
                            name: data.name
                        }
                    res.render("user-admin.ejs", {data: 'Berhasil Login!', dataFind: newData})
                }else if(bcrypt.compareSync(req.body.password,data.password)){
                    req.session.user = {
                        id: data.id,
                        name: data.name
                    }
                    res.render("home.ejs", {data: 'Berhasil Login!', dataFind: {name:data.name}})
                    // console.log(req.session, 'login session')
                }else{
                    res.render("user-login.ejs", {data: 'Gagal Login. email & password salah'})
                }
            })
            .catch(err => {
                res.send(err.message)
            })
        }else{
            res.send([req.sessionID, 'Login dulu'])
        }
    }
    static logout(req, res){
        req.session.destroy(function(err){
            console.log('session')
            res.redirect("/user/login")
        })
    }
    static list(req, res){
        Model.User.findAll()
        .then(data => {
            res.render("user-admin-list.ejs", {dataFind: data})
        })
        .catch(err => {
            res.send(err.message)
        })
    }
    static updateGet(req, res){
        let dataUpdate
        let dataFind
        Model.User.findOne({
            where: {id: req.params.id}
        })
        .then(data => {
            dataUpdate = data
            return Model.User.findAll()
        })
        .then(data2 => {
            dataFind = data2
            res.render("user-admin-listUpdate", {dataUpdate, dataFind})
        })
        .catch(err => {
            res.send(err.message)
        })
    }
    static update(req, res){
        Model.User.update(
            {name: req.body.name,
             email: req.body.email,
             role: req.body.role,
             password: req.body.password}, 
            { where: {id: req.params.id} }
        )
        .then(data => {
            res.redirect("/user/list")
        })
        .catch(err => {
            res.send(err.message)
        })
    }
    static delete(req, res){
        Model.User.destroy({
            where: {id: req.params.id}
        })
        .then(data => {
            res.redirect("/user/list")
        })
        .catch(err => {
            res.send(err.message)
        })
    }
}

module.exports = User