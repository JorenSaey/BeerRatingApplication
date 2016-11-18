import angular from 'angular';
import CreateConfig from './create.config';
import CreateCtrl from './create.controller';

const createModule = angular.module('app.create', []);
// routes
createModule.config(CreateConfig);
// controller
createModule.controller('CreateCtrl', CreateCtrl);

export default createModule;
