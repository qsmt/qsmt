/**
 * Created by UC206612 on 2016/11/16.
 *
 *
 * @author: Sheng Qing<qing.sheng@thomsonreuters.com>
 *
 */


(function() {
    'use strict';

    angular
        .module('qsmt')
        .component('partners', {
            template: require('./partners.component.html'),
            controller: PartnersController
        })
        .config(['$stateProvider', function($stateProvider) {
            const partners = {
                name: 'partners',
                url: '/partners',
                template: '<partners></partners>'
            };
            $stateProvider.state(partners);

        }]);

    PartnersController.$inject = ['postsService'];

    function PartnersController(postsService) {
        var categoryId = 5;
        var $ctrl = this;
        $ctrl.loading = true;

        postsService.getPostsPaging(categoryId, 1, 100).success(function(data) {
            console.log(data);
            $ctrl.data = data;
            $ctrl.select = $ctrl.data[0];
            $ctrl.loading = false;
        }).error(function(error) {
            console.log(error);
        });
    }

})();
