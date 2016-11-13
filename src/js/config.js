
(function () {
    'use strict';

    angular.module('qsmt')
        .config(config);

    config.$inject = ['$urlRouterProvider'];

    function config($urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
    }

})();