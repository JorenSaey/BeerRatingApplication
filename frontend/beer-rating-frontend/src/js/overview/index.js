import angular from 'angular';
import OverviewConfig from './overview.config';
import OverviewCtrl from './overview.controller';
import ShowDetails from './detail.directive';

const overviewModule = angular.module('app.overview', []);
// routes
overviewModule.config(OverviewConfig);
// controller
overviewModule.controller('OverviewCtrl', OverviewCtrl);
// directives
overviewModule.directive('beerDetail', ShowDetails);

export default overviewModule;
