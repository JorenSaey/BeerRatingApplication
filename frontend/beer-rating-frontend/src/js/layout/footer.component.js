class AppFooterCtrl {
  constructor(AppConstants) {
    'ngInject';

    this.appName = AppConstants.appName;
  }
}

const AppFooter = {
  controller: AppFooterCtrl,
  templateUrl: 'layout/footer.html',
};

export default AppFooter;
