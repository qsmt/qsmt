/**
 * Created by UC206612 on 2016/11/15.
 *
 *
 * @author: Sheng Qing<qing.sheng@thomsonreuters.com>
 *
 */


(function () {
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

    SolutionsController.$inject = [];

    function SolutionsController() {
        var $ctrl = this;
        $ctrl.page = 0;
        $ctrl.pagesize = 1;

        $ctrl.solutions = [
            {
                id: 1,
                image: 'images/solutions/1.jpg'
            }, {
                id: 2,
                image: 'images/solutions/2.jpg'
            }, {
                id: 3,
                image: 'images/solutions/3.jpg'
            }];

        $ctrl.totalpage = $ctrl.solutions.length / $ctrl.pagesize;

        $ctrl.pages = []
        for(var i = 0 ;i<$ctrl.totalpage;i++){
            $ctrl.pages.push(i+1);
        }
    }

})();