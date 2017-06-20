(function() {
    'use strict';

    angular
        .module('qsmt')
        .service('postsService', PostsService);

    PostsService.$inject = ['$http'];

    function PostsService($http) {
        this.getPostsPaging = getPostsPaging;

        ////////////////

        function getPostsPaging(categories, page, per_page) {
            return $http.get('http://www.qsmttech.com/wp-json/wp/v2/posts?categories=' + categories +
                '&orderby=slug&order=asc' +
                '&page=' + page +
                '&per_page=' + per_page);
        }
    }
})();
