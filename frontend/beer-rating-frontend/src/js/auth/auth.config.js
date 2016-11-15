function AuthConfig($stateProvider,$urlRouterProvider,$httpProvider){
  'ngInject';

  //define the routes
  $stateProvider.state('app.login', {
    url: '/login',
    templateUrl: 'auth/auth.html',
    controller: 'AuthCtrl as $ctrl',
    title: 'Log in'
  });
}

export default AuthConfig;
