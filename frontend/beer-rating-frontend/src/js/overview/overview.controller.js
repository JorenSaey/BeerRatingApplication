class OverviewCtrl {
  constructor(Beer, $state) {
    'ngInject';

    this._$state = $state;
    this.title = $state.current.title;
    Beer.findAll().then(
      (res) => {
        this.beers = res.data;
        this.filteredBeers = res.data;
        this.selectedBeer = res.data[0];
      },
      (err) => {
        this.error = err.data.message; // foutief
        // TODO: displaying error message if nothing found (backend)
      },
    );
  }
  filter() {
    let result = [];
    const self = this;
    if (self.keyword === '') {
      result = self.beers;
    } else {
      self.beers.forEach(function (beer) {
        if (beer.name.toLowerCase().indexOf(self.keyword.toLowerCase()) > -1) {
          result.push(beer);
        }
      });
    }
    if (result.length === 0) {
      self.noResult = 'Er zijn geen bieren gevonden';
    } else {
      self.noResult = null;
    }
    self.filteredBeers = result;
  }
  addBeer() {
    this._$state.go('app.create');
  }
  showDetails(beer) {
    this.selectedBeer = beer;
  }
}

export default OverviewCtrl;
