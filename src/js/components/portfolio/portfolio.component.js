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
        $ctrl.page = 0;
        $ctrl.pagesize = 6;

        $ctrl.portfolios = [
            {
            id: 1,
            image: 'images/portfolio/1.jpg'
        }, {
            id: 2,
            image: 'images/portfolio/2.jpg'
        }, {
            id: 3,
            image: 'images/portfolio/3.jpg'
        }, {
            id: 4,
            image: 'images/portfolio/4.jpg'
        }, {
            id: 5,
            image: 'images/portfolio/5.jpg'
        }, {
            id: 6,
            image: 'images/portfolio/6.jpg'
        }];

        $ctrl.totalpage = $ctrl.portfolios.length / $ctrl.pagesize;

        $ctrl.pages = []
        for(var i = 0 ;i<$ctrl.totalpage;i++){
            $ctrl.pages.push(i+1);
        }

        ////////////////

        $ctrl.$onInit = function() {};
        $ctrl.$onChanges = function(changesObj) {};
        $ctrl.$onDestory = function() {};
    }
})();