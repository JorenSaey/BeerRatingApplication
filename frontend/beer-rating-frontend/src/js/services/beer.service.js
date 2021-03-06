export default class Beer {
  constructor(AppConstants, User, Upload, $http) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._User = User;
    this._Upload = Upload;
    this._$http = $http;
  }
  // functions
  findById(beer) {
    return this._$http({
      url: `${this._AppConstants.api}/beers/${beer}`,
      headers: { Authorization: `Bearer ${this._User.getToken()}` },
      method: 'GET',
    });
  }
  findAll() {
    return this._$http({
      url: `${this._AppConstants.api}/beers`,
      headers: { Authorization: `Bearer ${this._User.getToken()}` },
      method: 'GET',
    });
  }
  create(beer, file) {
    return this._Upload.upload({
      url: `${this._AppConstants.api}/beers`,
      headers: { Authorization: `Bearer ${this._User.getToken()}` },
      method: 'POST',
      data: beer,
      file: file,
    });
  }
}
