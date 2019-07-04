let router = require('express').Router()
let Controller = require('../controllers/transaction')
let Middleware = require('../middleware/index')

router.get("/transaction/list", Middleware.admin, Controller.findAll)
router.get("/transaction/delete/:id",  Controller.delete)
module.exports = router