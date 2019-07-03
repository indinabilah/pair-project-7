const router = require('express').Router()
const Controller = require('../controllers/Ticket')
router.get('/' ,  Controller.RenderTicket)


module.exports = router