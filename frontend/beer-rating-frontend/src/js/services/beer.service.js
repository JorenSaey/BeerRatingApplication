export default class Beer {
  constructor(AppConstants, User, Upload, $http) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._User = User;
    this._Upload = Upload;
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
  create(beer) {
    return this._Upload.upload({
      url: `${this._AppConstants.api}/beers`,
      headers: { Authorization: `Bearer ${this._User.getToken()}` },
      method: 'POST',
      data: beer,
    });
  }
}
