var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var constants = require('../config/constants');

var UserSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  username: { type: String, unique: true },
  password: String,
  isHashed: { type: Boolean, default: false }
});

UserSchema.pre('save', function (next) {
  var user = this;
  if (user.isHashed) { return next(); }
  bcrypt.hash(user.password, bcrypt.genSaltSync(10), function (err, hash) {
    if (err) { return next(err); }
    user.password = hash;
    user.isHashed = true;
    return next();
  });
});

UserSchema.methods.comparePassword = function (password, cb) {
  bcrypt.compare(password, this.password, function (err, isMatch) {
    if (err) { return cb(err); }
    cb(null, isMatch);
  });
};
UserSchema.methods.generateToken = function () {
  var today = new Date();
  var exp = new Date(today);
  exp.setDate(today.getDate()+60);

  return jwt.sign({
    _id: this._id,
    username: this.username,
    exp: parseInt(exp.getTime()/1000)
  }, constants.secret);
};

mongoose.model('User', UserSchema);
