(function() {
    'use strict';

    angular
        .module('qsmt')
        .service('ContentService', ContentService);

    ContentService.$inject = ['$http'];

    function ContentService($http) {
        this.getContent = getContent;

        ////////////////

        function getContent() {}
    }
})();
