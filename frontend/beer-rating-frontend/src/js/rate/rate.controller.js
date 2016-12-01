class RateCtrl {
  constructor($state) {
    'ngInject';

    this._$state = $state;
    this.title = $state.current.title;
  }
}

export default RateCtrl;
