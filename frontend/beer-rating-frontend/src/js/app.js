import angular from 'angular';
import 'angular-ui-router';
import 'angular-slider';
import 'ng-file-upload';

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
import './create';
import './rate';
// create and bootstrap application
const requires = [
  'ui.router',
  'ui.slider',
  'ngFileUpload',
  'templates',
  'app.layout',
  'app.services',
  'app.auth',
  'app.overview',
  'app.create',
  'app.rate',
];
// Mount on window for testing
window.app = angular.module('app', requires);

angular.module('app').constant('AppConstants', constants);
angular.module('app').config(appConfig);
angular.module('app').run(appRun);

angular.bootstrap(document, ['app'], {
  strictDi: true,
});
