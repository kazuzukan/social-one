const express = require('express');
const router = express.Router();
const users = require('../model/data')
const search = require('../controller/userController');

//Default
router.get('/', search.defaultUser);

router.post('/search', (req,res) => {
  search.searcUser(req, res);
})

router.get('*', function(req, res){
  res.status(404).render('notFound');
});

module.exports = router 