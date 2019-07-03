class Tickets {
    static RenderTicket(req,res){
        res.render('TIcket.ejs')
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

module.exports = Tickets;