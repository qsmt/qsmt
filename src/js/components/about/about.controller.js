/**
 * Created by UC206612 on 2016/11/13.
 *
 *
 * @author: Sheng Qing<qing.sheng@thomsonreuters.com>
 *
 */


(function () {
    'use strict';

    angular.module('qsmt')
        .controller('AboutController',AboutController);

    AboutController.$inject = ['$scope','ContentService']

    function AboutController($scope,ContentService) {
        var vm = this;
        vm.loading = true;

        ContentService.getContent(2).success(function (response) {
			console.log(response);
			vm.data = response;
			vm.select = vm.data[0];
			vm.loading = false;
		}).error(function (error) {
			console.log(error);
		});

    }

})();
