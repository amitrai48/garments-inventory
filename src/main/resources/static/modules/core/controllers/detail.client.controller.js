(function(){
	'use strict';
	angular.module('core').controller('detailController',['$scope','$stateParams','detailService',function($scope,$stateParams,detailService){
		$scope.category = $stateParams.categoryId;
		//include custom colors for different category
		
		if( $scope.category==='trousers'){
			$scope.colors=[
			                   {"name":"Real black","value":"#000000"},
			                   {"name":"Elephant grey","value":"#292421"},
				               {"name":"Grey","value":"#787878"},
			                   {"name":"Dark Blue","value":"#043E84"},
			                   {"name":"Blue","value":"#33A1DE"},
			                   {"name":"Brown","value":"#5C3317"},
			                   {"name":"Maroon","value":"#800000"},
			                   {"name":"Red","value":"#C82536"},
			                   {"name":"Khaki","value":"#b88f14"},
			                   {"name":"Yellow","value":"#FFE600"},
			                   {"name":"Lemon Yellow","value":"#ffffcc"},
			                   {"name":"White","value":"#ffffff"},
			                   {"name":"Bottle Green","value":"#003300"},
			                   {"name":"Green","value":"#00AF33"}
			];
		}else if( $scope.category==='shirts' || $scope.category==='casual'){
			$scope.colors=[  
			                   {"name":"Dark Blue","value":"#043E84"},
			                   {"name":"Blue","value":"#33A1DE"},
			                   {"name":"Light Blue","value":"#44B8EA"},
			                   {"name":"Purple","value":"#5C246E"},
			                   {"name":"Lavander","value":"#9999ff"},
			                   {"name":"Yellow","value":"#FFE600"},
			                   {"name":"White","value":"#ffffff"},
			                   {"name":"Lemon Yellow","value":"#ffffcc"},
			                   {"name":"Bottle Green","value":"#003300"},
			                   {"name":"Green","value":"#00AF33"},
			                   {"name":"Light Green","value":"#AEDD3C"},
			                   {"name":"Brown","value":"#5C3317"},
			                   {"name":"Maroon","value":"#800000"},
			                   {"name":"Red","value":"#C82536"},
			                   {"name":"Orange","value":"#E47833"},
			                   {"name":"Pink","value":"#EE6AA7"},
			                   {"name":"Real black","value":"#000000"},
			                   {"name":"Elephant grey","value":"#292421"},
				               {"name":"Grey","value":"#787878"}
			                  
			];
		}
		else if( $scope.category==='jeans'){
			$scope.colors=[
		                   {"name":"Real black","value":"#000000"},
		                   {"name":"Elephant grey","value":"#292421"},
			               {"name":"Grey","value":"#787878"},
		                   {"name":"Dark Blue","value":"#043E84"},
		                   {"name":"Denim Blue","value":"#0066ff"},
		                   {"name":"Blue","value":"#33A1DE"},
		                   {"name":"Brown","value":"#5C3317"},
		                   {"name":"Maroon","value":"#800000"},
		                   {"name":"Khaki","value":"#b88f14"},
		                   {"name":"Lemon Yellow","value":"#ffffcc"},
		                   {"name":"White","value":"#ffffff"},
		                   {"name":"Bottle Green","value":"#003300"}
		];
	}
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