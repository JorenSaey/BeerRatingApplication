import angular from 'angular';
import 'angular-ui-router';

// Import app config files
import constants from './config/app.constants';
import appConfig from './config/app.config';
import appRun from './config/app.run';

// generated template files from Gulp
import './config/app.templates';
// import app functionality
import './layout';
import './services';
import './auth';
import './overview';
// create and bootstrap application
const requires = [
  'ui.router',
  'templates',
  'app.layout',
  'app.services',
  'app.auth',
  'app.overview',
];
// Mount on window for testing
window.app = angular.module('app', requires);

angular.module('app').constant('AppConstants', constants);
angular.module('app').config(appConfig);
angular.module('app').run(appRun);

angular.bootstrap(document, ['app'], {
  strictDi: true,
});
