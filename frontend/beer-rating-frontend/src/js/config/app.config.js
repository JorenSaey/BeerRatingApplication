function AppConfig($httpProvider, $stateProvider, $locationProvider, $urlRouterProvider) {
  'ngInject';

  $stateProvider.state('app', {
    abstract: true,
    templateUrl: 'layout/app-view.html',
  });

  $urlRouterProvider.otherwise('/overview');
}

export default AppConfig;
