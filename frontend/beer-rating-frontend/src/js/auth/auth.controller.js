class AuthCtrl {
  constructor($state) {
    'ngInject';

    this.title = $state.current.title;
  }
}

export default AuthCtrl;
