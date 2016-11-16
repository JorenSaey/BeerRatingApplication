export default class User {
  constructor(AppConstants, $http) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;
    this.current = null;
  }
  // functions
  attemptLogin(credentials) {
    return this._$http({
      url: `${this._AppConstants.api}/users/login`,
      method: 'POST',
      data: {
        username: credentials.email,
        password: credentials.password,
      },
    }).then((res) => {
      this.current = res.data.user;
    });
  }
  // TODO
}
