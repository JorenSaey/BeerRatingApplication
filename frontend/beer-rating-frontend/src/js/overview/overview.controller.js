class OverviewCtrl {
  constructor(Beer, $state) {
    'ngInject';

    this._$state = $state;
    this.title = $state.current.title;
    Beer.findAll().then(
      (res) => {
        this.beers = res.data;
        this.filteredBeers = res.data;
      },
      (err) => {
        this.error = err.data.message; // foutief
        // TODO: displaying error message if nothing found (backend)
      },
    );
  }
  addBeer() {
    this._$state.go('app.create');
  }
}

export default OverviewCtrl;
