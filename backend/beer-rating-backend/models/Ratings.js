var mongoose = require('mongoose');

var RatingSchema = new mongoose.Schema({
  user: String,
  beer: { type: mongoose.Schema.Types.ObjectId, ref: 'Beer' },
  ratingBefore: Number,
  ratingTaste: Number,
});

mongoose.model('Rating', RatingSchema);
