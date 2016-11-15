var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.json({ message: 'Dit werkt ook' });
});

module.exports = router;
