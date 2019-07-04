let Model = require('../models/index')
class Ticket {
    static RenderTicket(req,res){
        Model.Movie.findOne({
            where:{ id: req.params.id}
        })
        .then(data => {
            res.render('TIcket.ejs', {dataMovie: data, dataFind: {name:null}})
        })
        .catch(err => {
            res.send(err.message)
        })
    }

    static AddTicket(req,res){
        res.send('oe')
        // console.log(req.body)
        console.log(req.query)
    }
}

// user beli tiket kirim id user ke table transaksi
// user memilih tiket dapat id yang dipilih 
// <== insert into tb_transaksi id user .then = > insert into ticketTransaksi  

module.exports = Ticket;