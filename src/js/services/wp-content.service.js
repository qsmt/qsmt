(function() {
    'use strict';

    angular
        .module('qsmt')
        .service('ContentService', ContentService);

    ContentService.$inject = ['$http'];

    function ContentService($http) {
        this.exposedFn = exposedFn;

        ////////////////

        function exposedFn() {}
    }
})();
