function RateConfig($stateProvider) {
  'ngInject';

  $stateProvider.state('app.rate', {
    url: '/rate/:id',
    templateUrl: 'rate/rate.html',
    controller: 'RateCtrl as $ctrl',
    title: 'Rate',
  }).state('app.ratings', {
    url: '/ratings/:id',
    templateUrl: 'rate/ratings.html',
    controller: 'RateCtrl as $ctrl',
    title: 'Ratings',
  });
}

export default RateConfig;
