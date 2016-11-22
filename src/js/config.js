
(function () {
    'use strict';

    angular.module('qsmt')
        .config(config);

    config.$inject = ['$urlRouterProvider','$sceProvider'];

    function config($urlRouterProvider,$sceProvider) {
        $urlRouterProvider.otherwise('/');
        // $locationProvider.html5Mode(true)
		$sceProvider.enabled(false);
    }

})();
