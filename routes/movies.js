const router = require('express').Router();
const moviesControler = require('../controllers/movie')

router.get('/home', moviesControler.forHome)
router.get('/movie/list', moviesControler.findAll)
router.get('/movie/list/admin', moviesControler.findAll2)
router.get('/movie/list2/admin', moviesControler.listAdmin)
router.get('/movie/list/:id' , moviesControler.RenderFormAdmin);
router.get('/movie/update/:id', moviesControler.findOne)
router.post('/movie/update/:id' ,  moviesControler.EditMovie);
router.get('/movie/delete/:id' , moviesControler.DeleteMovie)
router.get('/movie/add', (req, res)=>{
    res.render("movie-insert.ejs")
})
router.post('/movie/addMovie' , moviesControler.AddMovie)

module.exports = router;