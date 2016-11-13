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
        .component('index', {
            template: require('./templates/index.html')
        })
        .component('carousel',{
            template: require('./templates/carousel.html'),
            controller : 'CarouselController'
        })
        .config(['$stateProvider', function ($stateProvider) {
            const indexState = {
                name: 'index',
                url: '/',
                template: '<index></index>'
            };
            $stateProvider.state(indexState);

        }]);

})();