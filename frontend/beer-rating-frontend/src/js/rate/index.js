import angular from 'angular';
import RateConfig from './rate.config';
import RateCtrl from './rate.controller';

const rateModule = angular.module('app.rate', []);
// routes
rateModule.config(RateConfig);
// controller
rateModule.controller('RateCtrl', RateCtrl);

export default rateModule;
