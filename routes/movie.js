let router = require('express').Router()
let Controller = require('../controllers/movie')

router.get("/movie/list", Controller.findAll)


module.exports = router