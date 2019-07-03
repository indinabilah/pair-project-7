let router = require('express').Router()
let Controller = require('../controllers/user')
let Middleware = require('../middleware/index')

router.get("/user/login", (req, res)=>{
    res.render("user-login.ejs")
})
router.get("/user/register", Controller.getRegister)
router.post("/user/register", Controller.register)
router.post("/user/login", Controller.login)
router.get("/user/logout", Controller.logout)
router.get("/user/list", Controller.list)
router.get("/user/admin", Controller.getAdminPage)

module.exports = router