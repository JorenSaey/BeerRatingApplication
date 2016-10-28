import angular from 'angular';

//Import app config files
import 'angular-ui-router';

//generated template files from Gulp
import './config/app.templates';
//import app functionality
import './auth';
//create and bootstrap application
const requires = [
  'ui.router',
  'templates',
  'app.auth'
];
//Mount on window for testing
window.app = angular.module('app',requires);

angular.bootstrap(document,['app'],{
  strictDi: true
});
