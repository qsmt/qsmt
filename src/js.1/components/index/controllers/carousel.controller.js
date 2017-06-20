/**
 * Created by UC206612 on 2016/11/13.
 *
 *
 * @author: Sheng Qing<qing.sheng@thomsonreuters.com>
 *
 */


(function () {
    'use strict';

    angular.module('qsmt').controller('CarouselController',CarouselController);

    CarouselController.$inject = ['$scope'];

    function CarouselController($scope) {
        $scope.myInterval = 5000;
        $scope.noWrapSlides = false;
        $scope.active = 0;
        var slides = $scope.slides = require('../data/carousels.json');
        var currIndex = 0;
console.log(slides)


    }

})();