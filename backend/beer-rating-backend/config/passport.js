var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var User = mongoose.model('User');

passport.use('local', new LocalStrategy(
    function (username, password, done) {
      User.findOne({ email: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false, { message: 'Aanmeldgegevens incorrect' }); }
        user.comparePassword(password, function (err, isMatch) {
          if (err) { return done(err); }
          if (!isMatch) { return done(null, false, { message: 'Aanmeldgegevens incorrect' }); }
          return done(null, user);
        });
      });
    }
));
