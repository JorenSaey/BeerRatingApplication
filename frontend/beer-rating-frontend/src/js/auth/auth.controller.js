class AuthCtrl {
  constructor(User, $state) {
    'ngInject';

    this._User = User;
    this.title = $state.current.title;
    this._$state = $state;
  }
  login() {
    this.isSubmitting = true;
    this._User.attemptLogin(this.loginForm).then(
      () => {
        this.isSubmitting = false;
        this._$state.go('app.overview');
      },
      (err) => {
        this.error = err.data.message;
        this.isSubmitting = false;
      },
     );
  }
  register() {
    this.isSubmitting = true;
    this._User.attemptRegister(this.registerForm).then(
      () => {
        this.isSubmitting = false;
        this._$state.go('app.overview');
      },
      (err) => {
        this.error = err.data.message;
        this.isSubmitting = false;
      },
    );
  }
}

export default AuthCtrl;
