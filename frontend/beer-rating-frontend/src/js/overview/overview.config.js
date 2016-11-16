function OverviewConfig($stateProvider) {
  'ngInject';

  $stateProvider.state('app.overview', {
    url: '/overview',
    templateUrl: 'overview/overview.html',
    controller: 'OverviewCtrl as $ctrl',
    title: 'Overzicht',
  });
}

export default OverviewConfig;
