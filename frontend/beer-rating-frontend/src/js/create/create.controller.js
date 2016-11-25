class CreateCtrl {
  constructor(Beer, $state) {
    'ngInject';

    this._Beer = Beer;
    this._$state = $state;
    this.title = $state.current.title;
    this.colors = ['blond', 'bruin', 'zwart', 'amber'];
  }
  create() {
    const beer = {
      name: this.formData.name,
      color: this.formData.color,
      country: this.formData.country,
      file: this.formData.picture,
    };
    this._Beer.create(beer);
  }
}
export default CreateCtrl;
