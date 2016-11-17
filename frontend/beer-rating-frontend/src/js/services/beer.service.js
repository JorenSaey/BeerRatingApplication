export default class Beer {
  constructor(AppConstants, User, $http) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._User = User;
    this._$http = $http;
  }
  // functions
  findAll() {
    return this._$http({
      url: `${this._AppConstants.api}/beers`,
      headers: { Authorization: `Bearer ${this._User.getToken()}` },
      method: 'GET',
    });
  }
}
