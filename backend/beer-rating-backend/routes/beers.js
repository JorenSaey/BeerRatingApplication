var express = require('express');
var mongoose = require('mongoose');
var jwt = require('express-jwt');
var Beer = mongoose.model('Beer');
var router = express.Router();
var constants = require('../config/constants');

var auth = jwt({ secret: constants.secret, userProperty:constants.userProperty });

router.get('/', auth, function (req, res, next) {
  Beer.find({}, function (err, data) {
    if (err) { return next(err); }
    res.json(data);
  });
});

module.exports = router;
