(function() {
	'use strict';

	// Usage:
	//
	// Creates:
	//

	angular
		.module('admin')
		.component('addContent', {
			template:require('./add-content.component.html'),
			//templateUrl: 'templateUrl',
			controller: AddContentController,
			bindings: {
				Binding: '=',
			},
		})
		.config(['$stateProvider', function ($stateProvider) {
			const add = {
				name: 'add',
				url: '/add/{category}',
				template: '<add-content></add-content>'
			};
			$stateProvider.state(add);

		}]);

	AddContentController.$inject = ['$stateParams','$http'];
	function AddContentController($stateParams,$http) {
		var $ctrl = this;
		$ctrl.category = $stateParams.category;
		console.log($ctrl.category)
		// require('quill')
		var toolbarOptions = [
			['bold', 'italic', 'underline', 'strike'],        // toggled buttons
			['blockquote', 'code-block'],

			[{ 'header': 1 }, { 'header': 2 }],               // custom button values
			[{ 'list': 'ordered'}, { 'list': 'bullet' }],
			[{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
			[{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
			[{ 'direction': 'rtl' }],                         // text direction

			[{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
			[{ 'header': [1, 2, 3, 4, 5, 6, false] }],

			[{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
			[{ 'font': [] }],
			[{ 'align': [] }],

			['clean'],                                         // remove formatting button
			['image']
		];
		var toolbarOptions2 = [
			{ size: [ 'small', false, 'large', 'huge' ]}
		];
		var options = {
			debug: 'info',
			modules: {
				// toolbar: '#toolbar'
				toolbar: toolbarOptions
			},
			placeholder: 'Compose an epic...',
			// readOnly: true,
			theme: 'snow'
		};
		var options2 = {
			modules: {
				toolbar: {
					container: '#toolbar',  // Selector for toolbar container
				}
			}
		};
		var editor = new Quill('.editor',options);
		////////////////

		$ctrl.$onInit = function() { };
		$ctrl.$onChanges = function(changesObj) { };
		$ctrl.$onDestory = function() { };

		$ctrl.submit = function () {
			var text = $('.editor .ql-editor').html();
			console.log(text);
			$http.post('https://qsmt.wilddogio.com/' + $ctrl.category + '.json', {
				title: $ctrl.title,
			    content: text
			}).then(function(response) {
			    console.log(response.data);
			}, function(error) {
			    console.log(error);
			});
		}

	}
})();
