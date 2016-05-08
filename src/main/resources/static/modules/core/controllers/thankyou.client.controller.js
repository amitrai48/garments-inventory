(function(){
	'use strict';
	angular.module('core').controller('thankyouController',['$scope','detailService',function($scope,detailService){
		console.log("thank you controller called");
		detailService.currentConfig=[];
			}]);
})();