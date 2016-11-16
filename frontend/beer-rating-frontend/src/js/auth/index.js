import angular from 'angular';
import AuthConfig from './auth.config';
import AuthCtrl from './auth.controller';

const authModule = angular.module('app.auth', []);

authModule.config(AuthConfig);

// Controller
authModule.controller('AuthCtrl', AuthCtrl);

export default authModule;
