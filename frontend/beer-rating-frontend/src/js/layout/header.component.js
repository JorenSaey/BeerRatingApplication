class AppHeaderCtrl {
  constructor(User, AppConstants) {
    'ngInject';

    this._User = User;
    this.appName = AppConstants.appName;
  }
  currentUser() {
    return this._User.currentUser();
  }
  isLoggedIn() {
    return this._User.isLoggedIn();
  }
  logOut() {
    this._User.logOut();
  }
}

const AppHeader = {
  controller: AppHeaderCtrl,
  templateUrl: 'layout/header.html',
};

export default AppHeader;
