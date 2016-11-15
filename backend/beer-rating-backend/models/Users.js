var express = require('express');
var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  username: { type: String, unique: true },
  password: String
});

mongoose.model('User', UserSchema);
