require('bootstrap/less/bootstrap.less');
require('../less/style.less');


require('angular');
require('angular-animate');
require('angular-touch');
require('angular-ui-router');
require('angular-ui-bootstrap');


require('wilddog/lib/wilddog-web-all');
require('wild-angular');


const dependancies = [
    'ngAnimate',
    'ngTouch',
    'ui.router',
    'ui.bootstrap',
    'wilddog'
];


angular.module('admin', dependancies)
    .controller('AdminController', ['$scope', '$http', '$wilddogObject', function($scope, $http, $wilddogObject) {
        $scope.data = [];
        $http.get('https://qsmt.wilddogio.com/web/saving-data/wildblog/users.json').then(function(response) {
            console.log(response.data);
            for (var key in response.data) {
                $scope.data.push(response.data[key]);
            }
        }, function(error) {
            console.log(error);
        });


        var config = {
            syncURL: "https://qsmt.wilddogio.com" //输入节点 URL
        };
        wilddog.initializeApp(config);
        var ref = wilddog.sync().ref();

        $scope.data2 = $wilddogObject(ref);
        $scope.data2.$loaded()
            .then(function() {
                console.log($scope.data2);
            })
            .catch(function(err) {
                console.error(err);
            });



        // $http.post('https://qsmt.wilddogio.com/web/saving-data/wildblog/users.json', {
        //     name: 'test',
        //     id: 2
        // }).then(function(response) {
        //     console.log(response.data);
        // }, function(error) {
        //     console.log(error);
        // });
    }]);

// require('./config');
// require('./components');
// require('./directives');
// require('./filters');
