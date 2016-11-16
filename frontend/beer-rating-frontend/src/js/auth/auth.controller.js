class AuthCtrl {
  constructor(User, $state) {
    'ngInject';

    this._User = User;
    this.title = $state.current.title;
    this.authType = $state.current.name.replace('app.', '');
  }
  submitForm() {
    if (this.authType === 'login') {
      this._User.attemptLogin(this.formData).then(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        },
      );
    }
    if (this.authType === 'register') {
      this._User.attemptRegister(this.formData).then(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        },
      );
    }
  }
}
export default AuthCtrl;
