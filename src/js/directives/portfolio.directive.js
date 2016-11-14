(function() {
    'use strict';

    angular
        .module('qsmt')
        .directive('portfolioItem', portfolioItem);

    portfolioItem.$inject = [''];
    function portfolioItem() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            template:'portfolioItem',
            bindToController: true,
            controller: ControllerController,
            controllerAs: 'vm',
            link: link,
            restrict: 'A',
            scope: {
            }
        };
        return directive;
        
        function link(scope, element, attrs) {
        }
    }
    /* @ngInject */
    function ControllerController () {
        console.log('ControllerController')
    }
})();

