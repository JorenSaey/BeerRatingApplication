var express = require('express');
var mongoose = require('mongoose');
var jwt = require('express-jwt');
var multiparty = require('connect-multiparty');
var fs = require('fs');
var Beer = mongoose.model('Beer');
var router = express.Router();
var constants = require('../config/constants');

var auth = jwt({ secret: constants.secret, userProperty:constants.userProperty });
multipartyMiddleware = multiparty();

router.get('/', auth, function (req, res, next) {
  Beer.find({}, function (err, data) {
    if (err) { return next(err); }
    res.json(data);
  });
});
router.post('/',auth , multipartyMiddleware, function(req, res, next) {
  if(!req.files.file || !req.body.name || !req.body.color || !req.body.country) {
    return res.status(400).json({ message: 'Vul alle velden in' });
  }
  var beer = new Beer();
  beer.name = req.body.name;
  beer.color = req.body.color;
  beer.country = req.body.country;
  beer.picture = 'images/beers'+req.files.file.name;
  fs.writeFile('/images/beers/'+req.files.file.name, req.files.file, function(err) {
    if(err) { return next(err); }
    beer.save(function(err){
      if(err) { return next(err); }
      res.json(beer);
    });
  });
});

module.exports = router;
