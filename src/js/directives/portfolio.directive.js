(function() {
    'use strict';

    require('./portfolio.directive.less');

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
            template: require('./portfolio.directive.html'),
            bindToController: true,
            controller: ControllerController,
            controllerAs: 'vm',
            link: link,
            restrict: 'AE',
            scope: {
                ngModel: '='
            }
        };
        return directive;

        function link(scope, element, attrs) {

        }
    }

    ControllerController.$inject = ['MediaService'];

    /* @ngInject */
    function ControllerController(MediaService) {
        var vm = this;
        if (vm.ngModel.featured_media) {
            MediaService.getImageUrl(vm.ngModel.featured_media).success(function(data) {
                vm.ngModel.imageSrc = data.source_url;
            })
        }else{
			vm.ngModel.imageSrc = 'images/no-image-box.png';
		}
    }
})();
