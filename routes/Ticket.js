const router = require('express').Router()
const Controller = require('../controllers/Ticket')

router.get('/ticket/:id' ,  Controller.RenderTicket);
router.get('/ticket/addTicket' ,  Controller.AddTicket)


module.exports = router