/**
 * Created by sheng on 2016/11/15.
 */

(function() {
    'use strict';

    angular
        .module('qsmt')
        .filter('pagination', pagination);

    function pagination() {
        return paginationFilterFilter;

        ////////////////


        // page start from 1
        function paginationFilterFilter(input, page, pagesize) {
            if (!input) {
                return input;
            }
            if (page < 1 || pagesize < 0) {
                return [];
            }
            var start = (page - 1) * pagesize;
            var end = page * pagesize;
            return input.slice(start, end);
        }
    }
})();
