(function() {
    'use strict';

    // Usage:
    // 
    // Creates:
    // 

    angular
        .module('qsmt')
        .component('portfolio', {
            template: require('./portfolio.component.html'),
            //templateUrl: 'templateUrl',
            controller: PortfolioController,
            bindings: {
                Binding: '=',
            },
        })
        .config(['$stateProvider', function($stateProvider) {
            const portfolio = {
                name: 'portfolio',
                url: '/portfolio',
                template: '<portfolio></portfolio>'
            };
            $stateProvider.state(portfolio);

        }]);

    PortfolioController.$inject = ['$scope'];

    function PortfolioController($scope) {
        var $ctrl = this;

        $ctrl.portfolios = [{
            id: 1,
            image: 'images/portfolio/1.jpg'
        }, {
            id: 2,
            image: 'images/portfolio/1.jpg'
        }, {
            id: 3,
            image: 'images/portfolio/1.jpg'
        }, {
            id: 4,
            image: 'images/portfolio/1.jpg'
        }, {
            id: 5,
            image: 'images/portfolio/1.jpg'
        }, {
            id: 6,
            image: 'images/portfolio/1.jpg'
        }];

        ////////////////

        $ctrl.$onInit = function() {};
        $ctrl.$onChanges = function(changesObj) {};
        $ctrl.$onDestory = function() {};
    }
})();