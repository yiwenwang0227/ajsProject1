'use strict';

var App = angular.module('AngularApp', ['ngRoute']);

// Declare app level module which depends on filters, and services
App.config(['$routeProvider', function ($routeProvider) {
	console.log("Config Route Provider");

    $routeProvider.when('/login1', {
        templateUrl: 'login1/layout',
        controller: Login1Controller
    });
    
    $routeProvider.when('/login2', {
        templateUrl: 'login2/layout',
        controller: Login2Controller
    });

    $routeProvider.otherwise({redirectTo: '/login1'});
}]);

App.config(['$httpProvider', function($httpProvider) {
    console.log("Config Http Provider");
	$httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
	}
]);
