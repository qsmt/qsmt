(function() {
    'use strict';

    angular
        .module('qsmt')
        .service('ContentService', ContentService);

    ContentService.$inject = ['$http'];

    function ContentService($http) {
        this.getCountCount = getCountCount;
        this.getContent = getContent;

        ////////////////

        function getContent() {}

        function getCountCount(category) {
            return $http.get('https://qsmt.wilddogio.com/' + category + '.json?count=true');
        }
    }
})();
