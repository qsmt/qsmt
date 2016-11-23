/**
 * Created by UC206612 on 2016/11/13.
 *
 *
 * @author: Sheng Qing<qing.sheng@thomsonreuters.com>
 *
 */


(function() {
    'use strict';

    angular.module('qsmt')
        .controller('AboutController', AboutController);

    AboutController.$inject = ['$scope', 'postsService']

    function AboutController($scope, postsService) {
        var categoryId = 2;
        var vm = this;
        vm.loading = true;

        postsService.getPostsPaging(categoryId, 1, 100).success(function(data) {
            console.log(data);
            vm.data = data;
            vm.select = vm.data[0];
            vm.loading = false;
        }).error(function(error) {
            console.log(error);
        });

    }

})();
