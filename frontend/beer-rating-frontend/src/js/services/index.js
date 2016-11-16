import angular from 'angular';
import UserService from './user.service';

const servicesModule = angular.module('app.services', []);
servicesModule.service('User', UserService);

export default servicesModule;
