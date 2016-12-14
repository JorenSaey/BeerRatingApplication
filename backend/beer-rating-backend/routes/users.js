var express = require('express');
var mongoose = require('mongoose');
var passport = require('passport');

// Required models
var User = mongoose.model('User');

var router = express.Router();

router.post('/register', function(req, res, next) {
  if (!req.body.email || !req.body.username || !req.body.password) {
    return res.status(400).json({ message: 'Vul alle velden in' });
  }
  var user = new User();
  user.email = req.body.email;
  user.username = req.body.username;
  user.password = req.body.password;
  user.save(function (err) {
    if (err) { return next(err); }
    res.json({ token: user.generateToken() });
  });
});
router.post('/login', function(req, res, next) {
  if (!req.body.username || !req.body.password) {
    return res.status(400).json({ message: 'Vul alle velden in' });
  }
  passport.authenticate('local', function(err, user, info){
    if (err) { return next(err); }
    if (user) { return res.json({ token: user.generateToken() }); }
    else { return res.status(401).json(info); }
  })(req, res, next);
});

module.exports = router;
