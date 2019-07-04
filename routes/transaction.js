let router = require('express').Router()
let Controller = require('../controllers/transaction')

router.get("/transaction/list", Controller.findAll)


module.exports = router