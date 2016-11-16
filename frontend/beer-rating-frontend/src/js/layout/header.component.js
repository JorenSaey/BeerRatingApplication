class AppHeaderCtrl {
  constructor(AppConstants) {
    'ngInject';

    this.appName = AppConstants.appName;
  }
}

const AppHeader = {
  controller: AppHeaderCtrl,
  templateUrl: 'layout/header.html',
};

export default AppHeader;
