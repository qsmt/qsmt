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

    PortfolioController.$inject = ['$scope', 'ContentService'];

    function PortfolioController($scope, ContentService) {
        var $ctrl = this;
        $ctrl.page = 0;
        $ctrl.pagesize = 6;
		$ctrl.loading = true;





        function updatePages() {
            $ctrl.totalpage = $ctrl.portfolios.length / $ctrl.pagesize;

            $ctrl.pages = []
            for (var i = 0; i < $ctrl.totalpage; i++) {
                $ctrl.pages.push(i + 1);
            }
        }

        ////////////////

        $ctrl.$onInit = function() {

            ContentService.getContent(3).success(function (data) {
				console.log(data)
				$ctrl.portfolios = data;
				updatePages();
				$ctrl.loading = false;
			})
        };
        $ctrl.$onChanges = function(changesObj) {};
        $ctrl.$onDestory = function() {};
    }
})();
