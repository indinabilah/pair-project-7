let Model = require("../models/index")

class Movie{
    static forHome(req, res){
        Model.Movie.findAll()
        .then(data => {
            // res.send(data)
            console.log(data)
            res.render("home.ejs", {data})
        })
        .catch(err => {
            res.send(err.message)
        })
    }
    static findAll(req, res){
        Model.Movie.findAll()
        .then(data => {
            res.render("movie-all.ejs", {dataMovie: data, dataFind: {name: null}})
        })
        .catch(err => {
            res.send(err.message)
        })
    }
    static findAll2(req, res){
        Model.Movie.findAll()
        .then(data => {
            res.render("movie-all-admin.ejs", {dataMovie: data, dataFind: {name: null}})
        })
        .catch(err => {
            res.send(err.message)
        })
    }
    static listAdmin(req, res){
        Model.Movie.findAll()
        .then(data => {
            res.render("movie-all-admin.ejs", {dataMovie: data, dataFind: {name: null}})
        })
        .catch(err => {
            res.send(err.message)
        })
    }
    static RenderFormAdmin(req,res){
        Model.Movie.findAll()
        .then((movie)=>{
            res.render('Form-Admin.ejs' , {movie , idMovie : idMovie })
        })
        .catch((err)=>{
            res.send(err)
        })
    }

    static AddMovie(req,res){
        Model.Movie.create({
            movie_name : req.body.movie_name,
            price : req.body.price,
            image: req.body.image
        })
        .then((movie)=>{
            res.redirect('/movie/list/admin')
        })
    }
    static findOne(req, res){
        Model.Movie.findOne({
            where: {id: req.params.id}
        })
        .then(data => {
            res.render("movie-update", {data})
        })
        .catch(err => {
            res.send(err.message)
        })
    }
   static EditMovie(req,res){
       Model.Movie.update({
        movie_name : req.body.movie,
        price : req.body.price,
        image: req.body.image
       },{
        where : {
            id : req.params.id
        }
       })
       .then((PL)=>{
            res.redirect('/movie/list/admin')
       })
   }
   static DeleteMovie(req,res){
       Model.Movie.destroy({
           where : {
               id : req.params.id
           }
       })
       .then((hasil)=>{
           res.redirect('/movie/list/admin')
       })
   }
}

module.exports = Movie
