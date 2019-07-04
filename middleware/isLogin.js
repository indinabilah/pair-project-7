function isLogin(req, res, next) {
    if(req.session.user){
        // console.log(req.body.role)
        // req.session.user = {
        //     id: req.body.id,
        //     name: req.body.name,
        //     role: req.body.role
        // }
        next()
    }else{
        res.redirect("/user/login")
    }
}

module.exports = isLogin