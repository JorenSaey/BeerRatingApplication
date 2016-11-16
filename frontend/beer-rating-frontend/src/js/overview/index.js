import angular from 'angular';
import OverviewConfig from './overview.config';
import OverviewCtrl from './overview.controller';

const overviewModule = angular.module('app.overview', []);
// routes
overviewModule.config(OverviewConfig);
// controller
overviewModule.controller('OverviewCtrl', OverviewCtrl);

export default overviewModule;
