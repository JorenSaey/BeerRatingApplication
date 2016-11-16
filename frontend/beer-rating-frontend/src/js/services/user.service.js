export default class User {
  constructor(AppConstants, $http, $window) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;
    this._$window = $window;
    this.current = null;
  }
  // functions
  attemptLogin(credentials) {
    return this._$http({
      url: `${this._AppConstants.api}/users/login`,
      method: 'POST',
      data: credentials,
    }).then((res) => {
      this.saveToken(res.data.token);
      this.setCurrentUser();
    });
  }
  saveToken(token) {
    this._$window.localStorage['beer-rating-token'] = token;
  }
  getToken() {
    return this._$window.localStorage['beer-rating-token'];
  }
  isLoggedIn() {
    const token = this.getToken();
    if (token) {
      const payload = JSON.parse(this._$window.atob(token.split('.')[1]));
      return payload.exp > Date.now() / 1000;
    }
    return false;
  }
  setCurrentUser() {
    if (this.isLoggedIn()) {
      const token = this.getToken();
      const payload = JSON.parse(this._$window.atob(token.split('.')[1]));
      this.current = payload.username;
    }
  }
  logOut() {
    this._$window.localStorage.removeItem('beer-rating-token');
    this.current = null;
  }
}
