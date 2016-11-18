(function() {
	'use strict';

	// Usage:
	//
	// Creates:
	//

	angular
		.module('admin')
		.component('contentList', {
			template:require('./content-list.component.html'),
			//templateUrl: 'templateUrl',
			controller: ContentListController
		})
		.config(['$stateProvider', function ($stateProvider) {
			const list = {
				name: 'list',
				url: '/list/{category}',
				template: '<content-list></content-list>'
			};
			$stateProvider.state(list);

		}]);

	ContentListController.$inject = ['$stateParams','$http'];
	function ContentListController($stateParams,$http) {
		var $ctrl = this;
console.log($stateParams)
		$ctrl.category = $stateParams.category;
		////////////////

		$ctrl.loading = true;
		$ctrl.data = [];


		function getContents(category) {
			$ctrl.data = [];
			$ctrl.loading = true;
			$http.get('https://qsmt.wilddogio.com/' + category + '.json').then(function(response) {
				console.log(response.data);
				for (var key in response.data) {
					$ctrl.data.push(angular.extend(response.data[key],{key:key}));
				}
				console.log($ctrl.data);
				$ctrl.loading = false;
			}, function(error) {
				console.log(error);
			});
		}


		$ctrl.$onInit = function() {
			getContents($ctrl.category);
		};
		$ctrl.$onChanges = function(changesObj) { };
		$ctrl.$onDestory = function() { };
	}
})();
