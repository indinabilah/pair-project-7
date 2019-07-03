let router = require('express').Router()
let Controller = require('../controllers/user')

router.get("/user/login", (req, res)=>{
    res.render("user-login.ejs")
})
router.get("/user/register", Controller.getRegister)
router.post("/user/register", Controller.register)
router.post("/user/login", Controller.login)
router.get("/user/logout", Controller.logout)

module.exports = router