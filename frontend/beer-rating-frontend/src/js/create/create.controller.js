class CreateCtrl {
  constructor($state) {
    'ngInject';

    this._$state = $state;
    this.title = $state.current.title;
    this.colors = ['blond', 'bruin', 'zwart', 'amber'];
  }
  addBeer() {
    console.log(this.formData);
  }
}

export default CreateCtrl;
