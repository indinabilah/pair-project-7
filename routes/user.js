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
router.get("/user/list",  Middleware.isLogin, Middleware.admin, Controller.list)
router.get("/user/admin", Middleware.admin, Controller.getAdminPage)
router.get("/user/update/:id", Middleware.admin, Controller.updateGet)
router.post("/user/update/:id", Middleware.admin, Controller.update)
router.get("/user/delete/:id", Middleware.admin, Controller.delete)

module.exports = router