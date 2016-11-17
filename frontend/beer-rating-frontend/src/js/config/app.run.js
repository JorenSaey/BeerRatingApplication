function AppRun(User, $rootScope, $state) {
  'ngInject';

  $rootScope.$on('$stateChangeSuccess', function (event) {
    // console.log('state changed');
    if (!User.isLoggedIn()) {
      event.preventDefault();
      $state.go('app.login');
    }
  });
}

export default AppRun;
