import angular from 'angular';

import 'angular-ui-router';

//generated template files from Gulp
import './config/app.templates';
//import app functionality

//create and bootstrap application
const requires = [
  'ui.router',
  'templates'
];
//Mount on window for testing
window.app = angular.module('app',requires);

angular.bootstrap(document,['app'],{
  strictDi: true
});
