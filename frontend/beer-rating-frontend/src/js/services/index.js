import angular from 'angular';
import UserService from './user.service';
import BeerService from './beer.service';
import RatingService from './rating.service';

const servicesModule = angular.module('app.services', []);
servicesModule.service('User', UserService);
servicesModule.service('Beer', BeerService);
servicesModule.service('Rating', RatingService);

export default servicesModule;
