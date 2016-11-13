
(function () {
    'use strict';

    angular.module('qsmt')
        .config(config);

    config.$inject = ['$urlRouterProvider','$locationProvider'];

    function config($urlRouterProvider,$locationProvider) {
        $urlRouterProvider.otherwise('/');
        // $locationProvider.html5Mode(true)
    }

})();