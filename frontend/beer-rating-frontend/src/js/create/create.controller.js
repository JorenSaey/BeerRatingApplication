class CreateCtrl {
  constructor(Upload, $state) {
    'ngInject';

    this._Upload = Upload;
    this._$state = $state;
    this.title = $state.current.title;
    this.colors = ['blond', 'bruin', 'zwart', 'amber'];
  }
  addBeer() {
    // TODO
    console.log(this.formData);
    if (this.formData) {
      this._Upload.upload({
        url: 'uploads',
        data: {
          file: this.formData.picture,
        },
      }).then(
        (res) => {
          console.log(`Success ${res.config.data.file.name} uploaded. Response ${res.data}`);
        },
        (err) => {
          console.log(`Error status ${err.status}`);
        },
        (evt) => {
          console.log(`Progres: ${evt.loaded} / ${evt.total}`);
        },
      );
    }
  }
}

export default CreateCtrl;
