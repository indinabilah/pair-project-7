let Model = require("../models/index")

class Transaction{
    static findAll(req, res){
        Model.Transaction.findAll()
        .then(data => {
            // res.send(data)
            res.render("user-admin-transaction.ejs", {data})
        })
        .catch(err => {
            res.send(err.message)
        })
    }
}

module.exports = Transaction