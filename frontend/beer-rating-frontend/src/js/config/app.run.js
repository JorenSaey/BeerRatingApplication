function AppRun(User, $rootScope, $state) {
  'ngInject';

  $rootScope.$on('$routeChangeStart', function () {
    // console.log('state changed');
    if (!User.isLoggedIn()) {
      $state.go('app.login');
    }
  });
}

export default AppRun;
