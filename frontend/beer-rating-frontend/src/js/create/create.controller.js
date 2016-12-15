class CreateCtrl {
  constructor(Beer, $state) {
    'ngInject';

    this._Beer = Beer;
    this._$state = $state;
    this.title = $state.current.title;
    this.colors = ['blond', 'bruin', 'zwart', 'amber', 'rood'];
  }
  create() {
    if (!this.formData) { this.error = 'Vul alle velden in'; }
    this.isSubmitting = true;
    const beer = {
      name: this.formData.name,
      color: this.formData.color,
      country: this.formData.country,
    };
    this._Beer.create(beer, this.formData.picture).then(
      () => {
        this.isSubmitting = false;
        this._$state.go('app.overview');
      },
      (err) => {
        this.error = err.data.message;
        this.isSubmitting = false;
      },
    );
  }
}
export default CreateCtrl;
