var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '3D Muscle Anatomy of a Tegu Lizard'});
});


module.exports = router;
