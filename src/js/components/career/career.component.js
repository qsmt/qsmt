(function() {
    'use strict';

    // Usage:
    //
    // Creates:
    //

    angular
        .module('qsmt')
        .component('career', {
            template: require('./career.component.html'),
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

    CareerController.$inject = ['postsService'];

    function CareerController(postsService) {
        var categoryId = 5;
        var $ctrl = this;
        $ctrl.loading = true;



        ////////////////

        $ctrl.$onInit = function() {
            postsService.getPostsPaging(categoryId, 1, 100).success(function(data) {
                console.log(data);
                $ctrl.data = data;
                $ctrl.select = $ctrl.data[0];
                $ctrl.loading = false;
            }).error(function(error) {
                console.log(error);
            });
        };
        $ctrl.$onChanges = function(changesObj) {};
        $ctrl.$onDestory = function() {};
    }
})();
