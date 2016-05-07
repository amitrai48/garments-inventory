(function(){
	'use strict';
	angular.module('core').controller('detailController',['$scope','$stateParams','detailService',function($scope,$stateParams,detailService){
		$scope.category = $stateParams.categoryId;
		console.log("Called");
		$scope.config ={};
		detailService.getConfig($scope.category).then(function(response){
			$scope.config = response.data;
			//$scope.config.size = JSON.parse($scope.config.size);
			console.log($scope.config.size);
		});
	}]);
})();