let Model = require("../models/index")

class Movie{
    static findAll(req, res){
        Model.Movie.findAll()
        .then(data => {
            // res.send(data)
            res.render("movie-all.ejs", {dataMovie: data, dataFind: {name:null}})
        })
        .catch(err => {
            res.send(err.message)
        })
    }
}

module.exports = Movie