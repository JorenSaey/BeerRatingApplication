import angular from 'angular';
import UserService from './user.service';
import BeerService from './beer.service';

const servicesModule = angular.module('app.services', []);
servicesModule.service('User', UserService);
servicesModule.service('Beer', BeerService);

export default servicesModule;
