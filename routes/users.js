var express = require('express');
var router = express.Router();
var database = require('../service/firebase');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/test', function(req,res,next) {
  var result = database.readData('nhanvien');
  console.log(result);
  res.send('res');
});



module.exports = router;
