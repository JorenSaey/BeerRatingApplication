export default class Rating {
  constructor(AppConstants, User, $http) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._User = User;
    this._$http = $http;
  }
  // functions
  findByBeer(beer) {
    return this._$http({
      url: `${this._AppConstants.api}/ratings/${beer}`,
      headers: { Authorization: `Bearer ${this._User.getToken()}` },
      method: 'GET',
    });
  }
  rate(beer, rating) {
    return this._$http({
      url: `${this._AppConstants.api}/ratings/${beer}`,
      headers: { Authorization: `Bearer ${this._User.getToken()}` },
      data: rating,
      method: 'POST',
    });
  }
}
