(function() {
'use strict';

    // Usage:
    //
    // Creates:
    //

    angular
        .module('qsmt')
        .component('career', {
            template:require('./career.component.html'),
            //templateUrl: 'templateUrl',
            controller: CareerController,
            bindings: {
                Binding: '=',
            },
        })
		.config(['$stateProvider', function($stateProvider) {
			const career = {
				name: 'career',
				url: '/career',
				template: '<career></career>'
			};
			$stateProvider.state(career);

		}]);

    CareerController.$inject = [];
    function CareerController (){
        var $ctrl = this;

        $ctrl.data = [
            {
                id:1,
                title:'联系方式',
                image:'images/career/1.jpg'
            },{
                id:2,
                title:'诚聘英才',
                image:'images/career/2.jpg'
            },{
                id:3,
                title:'面试说明',
                image:'images/career/3.jpg'
            }
        ];
        $ctrl.select = $ctrl.data[0];


        ////////////////

        $ctrl.$onInit = function() { };
        $ctrl.$onChanges = function(changesObj) { };
        $ctrl.$onDestory = function() { };
    }
})();
