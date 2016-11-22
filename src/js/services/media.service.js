(function() {
    'use strict';

    angular
        .module('qsmt')
        .service('MediaService', MediaService);

    MediaService.$inject = ['$http'];

    function MediaService($http) {
        this.getImageUrl = getImageUrl;

        ////////////////

        function getImageUrl(mediaId) {
            return $http.get('/wp-json/wp/v2/media/1505').source_url;
        }
    }
})();
