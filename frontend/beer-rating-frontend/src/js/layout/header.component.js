class AppHeaderCtrl {
  constructor(User, AppConstants, $state) {
    'ngInject';

    this._User = User;
    this.appName = AppConstants.appName;
    this._$state = $state;
  }
  currentUser() {
    return this._User.currentUser();
  }
  isLoggedIn() {
    return this._User.isLoggedIn();
  }
  logOut() {
    this._User.logOut();
    this._$state.go('app.login');
  }
}

const AppHeader = {
  controller: AppHeaderCtrl,
  templateUrl: 'layout/header.html',
};

export default AppHeader;
