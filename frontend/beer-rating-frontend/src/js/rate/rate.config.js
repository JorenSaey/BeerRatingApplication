function RateConfig($stateProvider) {
  'ngInject';

  $stateProvider.state('app.rate', {
    url: '/rate/:id',
    templateUrl: 'rate/rate.html',
    controller: 'RateCtrl as $ctrl',
    title: 'Rate',
  });
}

export default RateConfig;
