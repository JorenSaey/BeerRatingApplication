var express = require('express');
var mongoose = require('mongoose');
var jwt = require('express-jwt');
var fs = require('fs');
var multiparty = require('connect-multiparty');
var path = require('path');
var router = express.Router();
var constants = require('../config/constants');

// Required models
var Beer = mongoose.model('Beer');

var auth = jwt({ secret: constants.secret, userProperty: constants.userProperty });

var multipartyMiddleware = multiparty();

// Parameters
router.param('beer', function(req, res, next, id) {
  Beer.findById(id, function(err, beer) {
    if (err) { return next(err); }
    if (!beer) { return next(new Error('Kan het bier niet vinden')); }
    req.beer = beer;
    return next();
  });
});
// Routes
router.get('/', auth, function(req, res, next) {
  Beer.find({}, function(err, data) {
    if (err) { return next(err); }
    res.json(data);
  });
});
router.get('/:beer', function(req, res, next) {
  res.json(req.beer);
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
       if(err) {
         return res.status(400).json({ message: 'Probleem met uploaden van afbeelding' });
       }
    });
  });
  beer.save(function(err) {
    if(err) { return next(err); }
    res.json(beer);
  });
});

module.exports = router;
