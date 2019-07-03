let Model = require('../models/index')

class User{
    // static getPage(req, res){
    //     res.render("user-login.ejs", {msg: 'Silahkan Login ..'})
    // }
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
        if(req.sessionID){
            Model.User.findOne({
                where:{ email: req.body.email}
            })
            .then(data => {
                // res.send([req.session, req.sessionID])
                // res.send(data)
                res.render("home.ejs", {data: 'Berhasil Login!', dataFind: data})
            })
            .catch(err => {
                res.send(err.message)
            })
        }else{
            res.send([req.sessionID, 'Login dulu'])
        }
    }
    static logout(req, res){
        req.sessionID = null
        res.redirect("/user/login")
    }
}

module.exports = User