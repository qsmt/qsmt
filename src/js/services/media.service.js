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
            return $http.get('http://www.qsmttech.com/wp-json/wp/v2/media/' + mediaId) //.source_url;
        }
    }
})();
