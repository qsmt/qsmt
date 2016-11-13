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

    AboutController.$inject = ['$scope']

    function AboutController($scope) {
        var vm = this;
        this.t = 'hello';
        vm.data = [
            {
                "id":1,
                "title":"公司简介",
                "image":"images/about/1.jpg"
            },
            {
                "id":2,
                "title":"资质荣誉",
                "image":"images/about/2.png"
            },
            {
                "id":3,
                "title":"专注领域",
                "image":"images/about/3.jpg"
            },
            {
                "id":4,
                "title":"优势价值",
                "image":"images/about/4.png"
            }
        ];
        vm.select = vm.data[0];
    }

})();