class RateCtrl {
  constructor($state, $stateParams, Beer, Rating) {
    'ngInject';

    this._$state = $state;
    this.title = $state.current.title;
    this._Rating = Rating;
    Beer.findById($stateParams.id).then(
      (res) => {
        this.beer = res.data;
      },
    );
    Rating.findByBeer($stateParams.id).then(
      (res) => {
        this.ratings = res.data;
      },
    );
  }
  rate() {
    this.isSubmitting = true;
    this._Rating.rate(this.beer._id, this.formData).then(
      () => {
        this.isSubmitting = false;
        this._$state.go('app.overview');
      },
      (err) => {
        this.isSubmitting = false;
        this.error = err.data.message;
      },
    );
  }
}

export default RateCtrl;
