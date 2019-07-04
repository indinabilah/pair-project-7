const router = require('express').Router()
const Controller = require('../controllers/Ticket')
let Middleware = require('../middleware/index')


router.get('/ticket/:id' ,   Controller.RenderTicket);
router.post('/ticket/addTicket' , Controller.addTicket)
// router.get('/ticket/print', Controller.printTicket)

module.exports = router