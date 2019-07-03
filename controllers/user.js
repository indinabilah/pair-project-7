let Model = require('../models/index')
let bcrypt = require('bcrypt')
class User{
    static getPage(req, res){
        res.render("user-login.ejs")
    }
    static getAdminPage(req, res){
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
        if(req.sessionID){
            Model.User.findOne({
                where:{ email: req.body.email}
            })
            .then(data => {
                // res.send(data)
                newData = data
                if(data.role === "admin" && data.password === req.body.password){
                    res.render("user-admin.ejs", {data: 'Berhasil Login!', dataFind: newData})
                }else if(bcrypt.compareSync(req.body.password,data.password)){
                    //data.password === req.body.password
                    res.render("home.ejs", {data: 'Berhasil Login!', dataFind: newData})
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
        req.session.destroy()
        res.redirect("/")
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
}

module.exports = User