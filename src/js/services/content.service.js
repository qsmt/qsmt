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

        function getContent(categoryid) {
        	return $http.get('http://www.qsmttech.com/wp-json/wp/v2/posts?categories=' + categoryid +
				'&orderby=slug&order=asc');
		}

        function getCountCount(category) {
            return $http.get('https://qsmt.wilddogio.com/' + category + '.json?count=true');
        }
    }
})();
