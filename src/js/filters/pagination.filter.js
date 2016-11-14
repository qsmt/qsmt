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

        function paginationFilterFilter(input,page,pagesize) {
            if(!input){
                return input;
            }
            if(page < 0 || pagesize < 0){
                return [];
            }
            var start = page * pagesize;
            var end = (page+1)*pagesize;
            return input.slice(start,end);
        }
    }
})();