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