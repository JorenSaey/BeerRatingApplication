var mongoose = require('mongoose');

var BeerSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  color: String,
  country: String,
  image: String
});

mongoose.model('Beer', BeerSchema);
