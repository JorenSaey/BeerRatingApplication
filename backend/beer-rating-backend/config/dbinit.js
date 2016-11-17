var mongoose = require('mongoose');
var Beer = mongoose.model('Beer');

Beer.find({}, function (err, data) {
  if (err) { return console.log(err); }
  if (!data) {
    var blonde_affligem = new Beer();
    blonde_affligem.name = 'Blonde Affligem';
    blonde_affligem.color = 'blond';
    blonde_affligem.country = 'België';
    blonde_affligem.save();

    var waterloo_tripel = new Beer();
    waterloo_tripel.name = 'Waterloo Tripel';
    waterloo_tripel.color = 'blond';
    waterloo_tripel.country = 'België';
    waterloo_tripel.save();

    var tripel_karmeliet = new Beer();
    tripel_karmeliet.name = 'Tripel Karmeliet';
    tripel_karmeliet.color = 'blond';
    tripel_karmeliet.country = 'België';
    tripel_karmeliet.save();

    var st_bernardus_tripel = new Beer();
    st_bernardus_tripel.name = 'St. Bernardus Tripel';
    st_bernardus_tripel.color = 'blond';
    st_bernardus_tripel.country = 'België';
    st_bernardus_tripel.save();

    var straffe_hendrik_tripel = new Beer();
    straffe_hendrik_tripel.name = 'Straffe Hendrik Tripel';
    straffe_hendrik_tripel.color = 'blond';
    straffe_hendrik_tripel.country = 'België';
    straffe_hendrik_tripel.save();
  }
});
