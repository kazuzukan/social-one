const express = require('express');
const router = express.Router();
const search = require('../controller/userController');

//Default
router.get('/', search.defaultUser);

router.get('/about', (req, res) => {
  res.render('about');
})

router.post('/search', (req,res) => {
  search.searcUser(req, res);
})

router.get('*', function(req, res){
  res.status(404).render('notFound');
});

module.exports = router 