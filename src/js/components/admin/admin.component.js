(function () {
	'use strict';

	// Usage:
	//
	// Creates:
	//

	angular
		.module('admin')
		.component('admin', {
			template: require('./admin.component.html'),
			//templateUrl: 'templateUrl',
			controller: AdminController,
			bindings: {
				Binding: '=',
			},
		})
		.config(['$stateProvider', function ($stateProvider) {
			const indexState = {
				name: 'admin',
				url: '/',
				template: '<admin></admin>'
			};
			$stateProvider.state(indexState);

		}]);

	AdminController.$inject = ['$scope','$http'];
	function AdminController($scope,$http) {
		var $ctrl = this;
		$ctrl.loading = true;
		$ctrl.data = [];


		$ctrl.categories = [{
			id: 1,
			name: 'about',
			title: '关于我们'
		}, {
			id: 2,
			name: 'portfolio',
			title: '成功案例'
		}, {
			id: 3,
			name: 'solutions',
			title: '解决方案'
		}, {
			id: 4,
			name: 'partners',
			title: '伙伴计划'
		}, {
			id: 5,
			name: 'career',
			title: '加入我们'
		}
		];

		$scope.$watch('$ctrl.selectedCategory',function (val) {
			console.log(val);
			getContents(val.name)
		},true);

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


		////////////////

		$ctrl.$onInit = function () {
			$ctrl.selectedCategory = $ctrl.categories[0];
		};
		$ctrl.$onChanges = function (changesObj) {
		};
		$ctrl.$onDestory = function () {
		};
	}
})();
