(function() {
    'use strict';

    angular.module('qsmt')
        .config(config);

    config.$inject = ['$urlRouterProvider', '$sceProvider'];

    function config($urlRouterProvider, $sceProvider) {
        console.log('config');
        $urlRouterProvider.otherwise('/');
        // $locationProvider.html5Mode(true)
        $sceProvider.enabled(false);
    }

})();
