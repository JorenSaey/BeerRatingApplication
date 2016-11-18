function CreateConfig($stateProvider) {
  'ngInject';

  $stateProvider.state('app.create', {
    url: '/create',
    templateUrl: 'create/create.html',
    controller: 'CreateCtrl as $ctrl',
    title: 'Nieuw Bier',
  });
}

export default CreateConfig;
