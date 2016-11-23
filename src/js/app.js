require('bootstrap/less/bootstrap.less');
require('../less/style.less');


require('angular');
require('angular-animate');
require('angular-touch');
require('angular-ui-router');
require('angular-ui-bootstrap');


const dependancies = [
    'ngAnimate',
    'ngTouch',
    'ui.router',
    'ui.bootstrap'
];


angular.module('qsmt', dependancies);

require('./config');
require('./components');
require('./directives');
require('./filters');
require('./services');
angular.module('qsmt').run(run);

run.$inject = ['uibPaginationConfig'];

function run(uibPaginationConfig) {
	console.log('run');
    //display First / Last buttons
    uibPaginationConfig.boundaryLinks = true;
    uibPaginationConfig.firstText = '第一页';
    uibPaginationConfig.previousText = '上一页';
    uibPaginationConfig.nextText = '下一页';
    uibPaginationConfig.lastText = '最后一页';

}
