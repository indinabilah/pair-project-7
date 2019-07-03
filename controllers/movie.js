let Model = require("../models/index")

class Movie{
    static findAll(req, res){
        console.log(req.session, 'session di movie')
        Model.Movie.findAll()
        .then(data => {
            // res.send(data)
            res.render("movie-all.ejs", {dataMovie: data, dataFind: {name: null}})
        })
        .catch(err => {
            res.send(err.message)
        })
    }
    static RenderFormAdmin(req,res){
        let idMovie = 0
        if(req.params.id){
            idMovie = req.params.id
        }
        Movie.findAll()
        .then((movie)=>{
            res.render('Form-Admin.ejs' , {movie , idMovie : idMovie })
        })
        .catch((err)=>{
            res.send(err)
        })
    }

    static AddMovie(req,res){
        Movie.create({
            movie_name : req.body.movie,
            price : req.body.price
        })
        .then((movie)=>{
            res.redirect('/movie/list/0')
        })
    }

   static EditMovie(req,res){
       console.log(req.query)
       console.log(req.body)
       Movie.update({
        movie_name : req.body.movie,
        price : req.body.price
       },{
        where : {
            id : req.params.id
        }
       })
       .then((PL)=>{
            res.redirect('/movie/list/0')
       })
   }

   static DeleteMovie(req,res){
       Movie.destroy({
           where : {
               id : req.params.id
           }
       })
       .then((hasil)=>{
           res.redirect('/movie/list/0')
       })
   }
}

module.exports = Movie
