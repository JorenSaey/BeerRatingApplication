function AuthConfig($stateProvider,$urlRouterProvider,$httpProvider){
  'ngInject';

  //define the routes
  $stateProvider.state('app.login',{
    url:'/auth',
    templateUrl:'auth/auth.html'
  });
}

export default AuthConfig;
