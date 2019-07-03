const router = require('express').Router()
const Controller = require('../controllers/Ticket')

router.get('/' ,  Controller.RenderTicket);
router.get('/addTicket' ,  Controller.AddTicket)


module.exports = router