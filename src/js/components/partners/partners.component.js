/**
 * Created by UC206612 on 2016/11/16.
 *
 *
 * @author: Sheng Qing<qing.sheng@thomsonreuters.com>
 *
 */


(function () {
    'use strict';

	angular
		.module('qsmt')
		.component('partners', {
			template: require('./partners.component.html'),
			controller: PartnersController
		})
		.config(['$stateProvider', function($stateProvider) {
			const partners = {
				name: 'partners',
				url: '/partners',
				template: '<partners></partners>'
			};
			$stateProvider.state(partners);

		}]);

	PartnersController.$inject = [];

	function PartnersController() {
		var $ctrl = this;

		$ctrl.data = [
			{
				id: 1,
				title:'伙伴计划',
				image: 'images/partners/1.jpg'
			}, {
				id: 2,
				title:'合作品牌',
				image: 'images/partners/2.png'
			}];
		$ctrl.select = $ctrl.data[0];
	}

})();
