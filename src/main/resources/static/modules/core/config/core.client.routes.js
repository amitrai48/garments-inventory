(function(){
	'use strict';
	angular.module('core.routes').config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
		$urlRouterProvider.otherwise('/');
		$stateProvider.state('home',{
			url:'/',
			templateUrl:'modules/core/views/home.client.view.html'
		})
		.state('details',{
			url:'/details/:categoryId',
			templateUrl:'modules/core/views/detail.client.view.html'
		});
	}]);
})();