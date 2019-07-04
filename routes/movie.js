let router = require('express').Router()
let Controller = require('../controllers/movie')
let Middleware = require('../middleware/index')

router.get("/user/login", (req, res)=>{
    res.render("user-login.ejs")
})
router.get("/user/register", Controller.getRegister)
router.post("/user/register", Controller.register)
router.post("/user/login", Controller.login)
router.get("/user/logout", Middleware.isLogout, Controller.logout)
router.get("/user/list", Controller.list)
router.get("/user/admin", Controller.getAdminPage)
router.get("/movie/list", Controller.findAll)

module.exports = router