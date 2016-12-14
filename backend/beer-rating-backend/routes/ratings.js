var express = require('express');
var mongoose = require('mongoose');
var jwt = require('express-jwt');
var router = express.Router();
var constants = require('../config/constants');

// Required models
var Beer = mongoose.model('Beer');
var User = mongoose.model('User');
var Rating = mongoose.model('Rating');

var auth = jwt({ secret: constants.secret, userProperty: constants.userProperty });

// Parameters
router.param('beer', function(req, res, next, id) {
  Beer.findById(id, function(err, beer) {
    if (err) { return next(err); }
    if (!beer) { return next(new Error('Kan de gebruiker niet vinden')); }
    req.beer = beer;
    return next();
  });
});
// Routes
router.get('/', auth, function(req, res, next) {
  Rating.find({}, function(err, data) {
    if (err) { return next(err); }
    res.json(data);
  });
});
router.get('/:beer', auth, function(req, res, next) {
  Rating.find({ beer: req.beer._id }, function(err, data) {
    if (err) { return next(err); }
    res.json(data);
  });
});
router.post('/:beer', auth, function(req, res, next) {
   if (!req.body.ratingBefore || !req.body.ratingTaste) {
     return res.status(400).json({ message: 'Vul alle velden in' });
   }
   Rating.find({ user: req.payload._id, beer: req.beer._id }, function(err, data) {
     if (err) { return next(err); }
     if (data.length !== 0) {
       return res.status(400).json({ message: 'Deze gebruiker heeft dit bier al een score gegeven' });
     }
     var rating = new Rating();
     rating.user = req.payload._id;
     rating.beer = req.beer._id;
     rating.ratingBefore = req.body.ratingBefore;
     rating.ratingTaste = req.body.ratingTaste;
     rating.save(function(err) {
       if (err) { return next(err, rating); }
       res.json(rating);
     });
   });
});

module.exports = router;
