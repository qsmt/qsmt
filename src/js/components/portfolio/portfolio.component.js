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

    PortfolioController.$inject = ['$scope', '$http'];

    function PortfolioController($scope, $http) {
        var $ctrl = this;
        $ctrl.page = 0;
        $ctrl.pagesize = 6;

        $ctrl.portfolios = [{
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



        function updatePages() {
            $ctrl.totalpage = $ctrl.total / $ctrl.pagesize;

            $ctrl.pages = []
            for (var i = 0; i < $ctrl.totalpage; i++) {
                $ctrl.pages.push(i + 1);
            }
        }

        ////////////////

        $ctrl.$onInit = function() {

            $http.get('http://sheng00.com/wp-json/wp/v2/posts?per_page=6').then(
                function(response) {
                    console.log(response);
                    console.log(response.headers('X-WP-Total'));
                    $ctrl.portfolios = response.data;
                    $ctrl.total = response.headers('X-WP-Total');
                    updatePages();
                },
                function(error) {
                    console.log(error);
                }
            )
        };
        $ctrl.$onChanges = function(changesObj) {};
        $ctrl.$onDestory = function() {};
    }
})();
