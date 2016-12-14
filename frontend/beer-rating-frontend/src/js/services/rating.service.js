export default class Rating {
  constructor(AppConstants, User, $http) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._User = User;
    this._$http = $http;
  }
}
