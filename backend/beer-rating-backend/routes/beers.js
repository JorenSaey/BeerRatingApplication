var express = require('express');
var mongoose = require('mongoose');
var jwt = require('express-jwt');
var path = require('path');
var multer = require('multer');
// var multiparty = require('connect-multiparty');
var Beer = mongoose.model('Beer');
var router = express.Router();
var constants = require('../config/constants');

// var multipartyMiddleware = multiparty();

var auth = jwt({ secret: constants.secret, userProperty:constants.userProperty });
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../public/images/beers/'/*path.join(__dirname,'..','public','images','beers')*/);
  },
  filename: function (req, file, cb) {
    cb(null, file.name);
  }
});
var upload = multer({
  storage: storage
}).single('file');

router.get('/', auth, function (req, res, next) {
  Beer.find({}, function (err, data) {
    if (err) { return next(err); }
    res.json(data);
  });
});
router.post('/', auth, function(req, res, next) {
  console.log(req.body);
  if(!req.body.file || !req.body.name || !req.body.color || !req.body.country) {
    return res.status(400).json({ message: 'Vul alle velden in' });
  }
  var beer = new Beer();
  beer.name = req.body.name;
  beer.color = req.body.color;
  beer.country = req.body.country;
  beer.image = 'images/beers/'+req.body.file.name;
  console.log(beer);
  upload(req, res, function(err){
    if(err){ return next(err); }
  });
});

module.exports = router;
