class AuthCtrl {
  constructor(User, $state) {
    'ngInject';

    this._User = User;
    this.title = $state.current.title;
    this._$state = $state;
    this.authType = $state.current.name.replace('app.', '');
  }
  submitForm() {
    this.isSubmitting = true;
    if (this.authType === 'login') {
      this._User.attemptLogin(this.formData).then(
        () => {
          this.isSubmitting = false;
          // TODO this._$state.go('app.overview');
        },
        (err) => {
          this.error = err.data.message;
          this.isSubmitting = false;
        },
      );
    }
    // TODO register
  }
}
export default AuthCtrl;
