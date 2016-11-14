(function() {
    'use strict';

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
            require: ['ngModel'],
            template: require('./portfolio.directive.html'),
            bindToController: true,
            controller: ControllerController,
            controllerAs: 'vm',
            link: link,
            restrict: 'AE',
            scope: {}
        };
        return directive;

        function link(scope, element, attrs, controllers) {
            var tabsCtrl = controllers[0];
            console.log(tabsCtrl)
            scope.model = tabsCtrl.$modelValue;
            console.log(scope.model);
        }
    }
    /* @ngInject */
    function ControllerController() {

    }
})();