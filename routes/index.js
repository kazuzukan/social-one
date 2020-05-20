const express = require('express');
const router = express.Router();
const users = require('../model/data')

//Default
router.get('/', (req, res) => {
  res.render('main', {users: users})
})

router.get('*', function(req, res){
  res.status(404).render('notFound');
});

module.exports = router