let Model = require("../models/index")
let Helper = require('../helpers/rupiah')
class Transaction{
    static findAll(req, res){
        Model.Ticket.findAll()
        .then(data => {
            // res.send(data)
            res.render("user-admin-transaction.ejs", {data, Helper})
        })
        .catch(err => {
            res.send(err.message)
        })
    }
    static delete(req, res){
        Model.Transaction.destroy({
            where:{id: req.params.id}
        })
        .then(data => {
            // res.send(data)
            res.redirect("/transaction/list")
        })
        .catch(err => {
            res.send(err.message)
        })
    }
    static viewTransaction(req, res){
        Model.Ticket.findByPk({
            where:{TransactionId: req.params.id}
        })
        .then(data => {
            res.send(data)
            res.redirect("/transaction/list")
        })
        .catch(err => {
            res.send(err.message)
        })
    }
    static findTransaction(req, res){
        Model.Transaction.findAll({
            where: {UserId: req.params.id},
        })
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            res.send(err.message)
        })

    }
}

module.exports = Transaction