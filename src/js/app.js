require('bootstrap/less/bootstrap.less');
require('../less/style.less');


require('angular');
require('angular-ui-router');
require('angular-ui-bootstrap');


const dependancies = [
    'ui.router',
    'ui.bootstrap'
];


angular.module('qsmt',dependancies);

require('./config');
require('./components');