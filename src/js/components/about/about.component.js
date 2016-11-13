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
        .component('about', {
            template: require('./about.component.html'),
            controller: 'AboutController'
        })
        .config(['$stateProvider', function ($stateProvider) {
            const about = {
                name: 'about',
                url: '/about',
                template: '<about></about>'
            };
            $stateProvider.state(about);

        }]);

    require('./about.controller');

})();