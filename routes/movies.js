const router = require('express').Router();
const moviesControler = require('../controllers/movie')
let Middleware = require('../middleware/index')

router.get('/home', moviesControler.forHome)
router.get('/movie/list', moviesControler.findAll)
router.get('/movie/list/admin', Middleware.admin, moviesControler.findAll2)
router.get('/movie/list2/admin', Middleware.admin, moviesControler.listAdmin)
router.get('/movie/list/:id' , Middleware.admin, moviesControler.RenderFormAdmin);
router.get('/movie/update/:id', Middleware.admin, moviesControler.findOne)
router.post('/movie/update/:id' ,  Middleware.admin, moviesControler.EditMovie);
router.get('/movie/delete/:id' , Middleware.admin, moviesControler.DeleteMovie)
router.get('/movie/add', (req, res)=>{
    res.render("movie-insert.ejs")
})
router.post('/movie/addMovie' , Middleware.admin, moviesControler.AddMovie)

module.exports = router;