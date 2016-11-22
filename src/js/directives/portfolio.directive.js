(function() {
    'use strict';

    require('./portfolio.directive.less');

    angular
        .module('qsmt')
        .directive('portfolioItem', portfolioItem);

    portfolioItem.$inject = [];

    function portfolioItem() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            template: require('./portfolio.directive.html'),
            bindToController: true,
            controller: ControllerController,
            controllerAs: 'vm',
            link: link,
            restrict: 'AE',
            scope: {
                ngModel:'='
            }
        };
        return directive;

        function link(scope, element, attrs) {

        }
    }
    /* @ngInject */
    function ControllerController() {

    }
})();
