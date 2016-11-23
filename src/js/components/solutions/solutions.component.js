/**
 * Created by UC206612 on 2016/11/15.
 *
 *
 * @author: Sheng Qing<qing.sheng@thomsonreuters.com>
 *
 */


(function() {
    'use strict';

    angular
        .module('qsmt')
        .component('solutions', {
            template: require('./solutions.component.html'),
            controller: SolutionsController
        })
        .config(['$stateProvider', function($stateProvider) {
            const solutions = {
                name: 'solutions',
                url: '/solutions',
                template: '<solutions></solutions>'
            };
            $stateProvider.state(solutions);

        }]);

    SolutionsController.$inject = ['postsService'];

    function SolutionsController(postsService) {
        var categoryId = 4;
        var $ctrl = this;
        $ctrl.currentPage = 1;
        $ctrl.pagesize = 10;
        $ctrl.loading = true;

        function updatePages() {
            $ctrl.totalpage = $ctrl.totalItems / $ctrl.pagesize;
        }

        function updateData() {
            $ctrl.loading = true;
            postsService.getPostsPaging(categoryId, $ctrl.currentPage, $ctrl.pagesize)
                .then(function(response) {
                    $ctrl.totalItems = response.headers('X-WP-Total');
                    $ctrl.data = response.data;
                    updatePages();
                    $ctrl.loading = false;
                })
        }

        $ctrl.pageChanged = function() {
            updateData();
        }


        $ctrl.$onInit = function() {
            updateData();
        };
        $ctrl.$onChanges = function(changesObj) {};
        $ctrl.$onDestory = function() {};

    }

})();
