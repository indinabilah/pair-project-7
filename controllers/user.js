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
        Model.User.findOne({
            where:{ email: req.body.email}
        })
        .then(data => {
            res.redirect("/home")
        })
        .catch(err => {
            res.send(err.message)
        })
    }
}

module.exports = User