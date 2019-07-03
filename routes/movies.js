const router = require('express').Router();
const moviesControler = require('../controllers/movie')

router.get('/list/:id' , moviesControler.RenderFormAdmin);
router.post('/edit/:id' ,  moviesControler.EditMovie);
router.get('/delete/:id' , moviesControler.DeleteMovie)
router.post('/addMovie' , moviesControler.AddMovie)

module.exports = router;