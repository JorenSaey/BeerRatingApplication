import angular from 'angular';
import 'angular-ui-router';

// Import app config files
import constants from './config/app.constants';
import appConfig from './config/app.config';

// generated template files from Gulp
import './config/app.templates';
// import app functionality
import './layout';
import './auth';
// create and bootstrap application
const requires = [
  'ui.router',
  'templates',
  'app.layout',
  'app.auth',
];
// Mount on window for testing
window.app = angular.module('app', requires);

angular.module('app').constant('AppConstants', constants);
angular.module('app').config(appConfig);

angular.bootstrap(document, ['app'], {
  strictDi: true,
});
