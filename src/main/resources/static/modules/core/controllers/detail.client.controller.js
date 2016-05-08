(function(){
	'use strict';
	angular.module('core').controller('detailController',['$scope','$stateParams','detailService',function($scope,$stateParams,detailService){
		$scope.category = $stateParams.categoryId;
		$scope.currentConfig = detailService.currentConfig;
		$scope.combinations = [];
		if($scope.currentConfig.length !== 0)
			{
			console.log("inside adding old combination");
			var config;
			angular.forEach($scope.currentConfig,function(config,index){
				if(config.product===$scope.category)
					{
					$scope.combinations.push(config);
					}
			});

			}
		console.log("Called");
		$scope.config ={};
		$scope.product={};
		detailService.getConfig($scope.category).then(function(response){
			$scope.config = response.data;
			//$scope.config.size = JSON.parse($scope.config.size);
			console.log($scope.config.size);
			console.log($scope.config.model);
		});
		
		$scope.addCombination = function()
		{
			console.log("adding combination");
		
			if($scope.product!==undefined && $scope.product.size!==undefined && $scope.product.size!==null && $scope.product.model!==null)
			{
				var product = {product: $scope.category, color:$scope.product.color, size:$scope.product.size, model:$scope.product.model};
				$scope.combinations.push(product);
				detailService.currentConfig.push(product);
				$scope.product=undefined;
			}
			console.log($scope.combinations);
		}
		$scope.removeCombination = function(combination)
		{
			console.log("removing combination");
			var index = ($scope.combinations).indexOf(combination);
			if( index !== -1) {
				 console.log("deleted");
				 
				 ($scope.combinations).splice(index, 1);   
				}
			index=(detailService.currentConfig).indexOf(combination);
			if( index !== -1) {
				 console.log("deleted");
				 
				 (detailService.currentConfig).splice(index, 1);   
				}
		}
		
		
	}]);
})();