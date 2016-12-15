class OverviewCtrl {
  constructor(Beer, Rating, $state) {
    'ngInject';

    this._$state = $state;
    this.title = $state.current.title;
    this._Rating = Rating;
    Beer.findAll().then(
      (res) => {
        this.beers = res.data;
        this.filteredBeers = res.data;
        this.selectedBeer = res.data[0];
        this.calculateAverages();
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
  showDetails(beer) {
    this.selectedBeer = beer;
    this.calculateAverages();
  }
  calculateAverages() {
    return this._Rating.calculateAverages(this.selectedBeer._id).then(
      () => {
        this.selectedBeer.averages = this._Rating.getAverages();
      },
    );
  }
  addBeer() {
    this._$state.go('app.create');
  }
  rate() {
    this._$state.go('app.rate', { id: this.selectedBeer._id });
  }
}

export default OverviewCtrl;
