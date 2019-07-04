let Model = require('../models/index')
let Helper = require('../helpers/rupiah')
class Ticket {
    static RenderTicket(req,res){
        Model.Movie.findOne({
            where:{ id: req.params.id}
        })
        .then(data => {
            res.render('TIcket.ejs', {dataMovie: data, dataFind: {name:null}, digit:Helper})
        })
        .catch(err => {
            res.send(err.message)
        })
    }
    static addTicket(req, res){
        let dataFind
        let dataIdUsTrans
        let seats = req.body.seat.split(",")
        Model.User.findOne({
            where: {email : req.body.email}
        })
        .then(data =>{
            dataFind = data
            return Model.Transaction.create({UserId: Number(data.id)})
        })
        .then((data) => {
            return Model.Transaction.findOne({where: {UserId: Number(dataFind.id)}})
        })
        .then(data2 => {
            dataIdUsTrans = data2
            seats.forEach(element => {
                return Model.Ticket.create({
                    TransactionId: dataIdUsTrans.id,
                    MovieId: req.body.movie_id,
                    price: req.body.total_price / seats.length,
                    seat: element,
                    createAt: new Date(),
                    updatedAt: new Date()
                })
            });
        })
        .then(()=>{
            let data = {
                email: req.body.email,
                movie_name: req.body.movie_name,
                seats: req.body.seat,
                totalPrice: req.body.total_price
            }
            res.render("user-checkout", {data, digit:Helper, seats})
        })
        .catch(err => {
            res.send(err.message)
        })
    }
}

// user beli tiket kirim id user ke table transaksi
// user memilih tiket dapat id yang dipilih 
// <== insert into tb_transaksi id user .then = > insert into ticketTransaksi  

module.exports = Ticket;