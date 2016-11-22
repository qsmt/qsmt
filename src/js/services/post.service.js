(function() {
    'use strict';

    angular
        .module('qsmt')
        .service('PostsService', PostsService);

    PostsService.$inject = ['$http'];

    function PostsService($http) {
        this.exposedFn = exposedFn;

        ////////////////

        function exposedFn() {}
    }
})();
