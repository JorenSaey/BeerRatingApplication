var express = require('express');
var mongoose = require('mongoose');
var fs = require('fs');
var jwt = require('express-jwt');
var multiparty = require('connect-multiparty');
var path = require('path');
var Beer = mongoose.model('Beer');
var router = express.Router();
var constants = require('../config/constants');

var auth = jwt({ secret: constants.secret, userProperty:constants.userProperty });

var multipartyMiddleware = multiparty();

router.get('/', auth, function (req, res, next) {
  Beer.find({}, function (err, data) {
    if (err) { return next(err); }
    res.json(data);
  });
});
router.post('/', auth, multipartyMiddleware, function(req, res, next) {
  if(!req.files.file || !req.body.name || !req.body.color || !req.body.country) {
    return res.status(400).json({ message: 'Vul alle velden in' });
  }
  var beer = new Beer();
  beer.name = req.body.name;
  beer.color = req.body.color;
  beer.country = req.body.country;
  beer.image = 'images/beers/'+req.files.file.name;
  console.log(beer);
  fs.readFile(req.files.file.path, function(err, data) {
    var newPath =  path.join(__dirname,'..','public','images','beers',req.files.file.name);
    console.log(newPath);
    fs.writeFile(newPath, data, function(err) {
       if(err) { console.log('upload failed'); }
       console.log('Upload succeeded');
    });
  });
});

module.exports = router;
