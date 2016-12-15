export default class Rating {
  constructor(AppConstants, User, $http, $window) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._User = User;
    this._$http = $http;
    this._$window = $window;
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
  calculateAverages(beer) {
    return this.findByBeer(beer).then(
      (res) => {
        if (res.data.length === 0) {
          this._$window.sessionStorage.averageBefore = 0;
          this._$window.sessionStorage.averageTaste = 0;
        } else {
          let sumBefore = 0;
          let sumTaste = 0;
          res.data.forEach(function (rating) {
            sumBefore += rating.ratingBefore;
            sumTaste += rating.ratingTaste;
          });
          const averageBefore = sumBefore / res.data.length;
          const averageTaste = sumTaste / res.data.length;
          this._$window.sessionStorage.averageBefore = averageBefore;
          this._$window.sessionStorage.averageTaste = averageTaste;
        }
      },
    );
  }
  getAverages() {
    return {
      averageBefore: this._$window.sessionStorage.averageBefore,
      averageTaste: this._$window.sessionStorage.averageTaste,
    };
  }
}
