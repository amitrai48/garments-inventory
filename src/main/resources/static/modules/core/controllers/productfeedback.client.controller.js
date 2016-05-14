(function(){
	'use strict';
	angular.module('core').controller('productfeedbackController',['$scope','$stateParams','detailService',function($scope,$stateParams,detailService){
		console.log("product feedback controller called");
		$scope.category = $stateParams.categoryId;
		$scope.combinations = [];
		$scope.models =[];
		var sizeData = {};
		$scope.selectedChart = "PieChart";
		detailService.getFeedbackProductWise($scope.category).then(function(response){
			var data = response.data;
			angular.forEach(data,function(value,key){
				angular.forEach(value.requirements,function(combination,key){
					if(combination.product === $scope.category){
						$scope.combinations.push(combination);
					}
				});
			});
			
			angular.forEach($scope.combinations,function(combination,key){
				if($scope.models.indexOf(combination.model)===-1)
					$scope.models.push(combination.model);
			});
			
		});
		
		$scope.changeModel = function(){
			sizeData=[];
			var temp=[];
			angular.forEach($scope.combinations,function(combination,key){
				if(combination.model === $scope.selectedModel){
					if(!temp[combination.size])
						temp[combination.size]=1;
					else
						temp[combination.size] = temp[combination.size]+1;
				}
			});
			$scope.myChartObject.options = {
			        'title': $scope.selectedModel
			    };
			
			angular.forEach(temp,function(value,key){
				var tempData={};
				tempData.c=[];
				tempData.c.push({v:key});
				tempData.c.push({v:value});
				sizeData.push(tempData);
			});
			console.log(sizeData);
			$scope.myChartObject.data.rows = sizeData;
		};
		
		$scope.changeChart = function(){
			$scope.myChartObject.type = $scope.selectedChart;
		}
		
		$scope.myChartObject = {};
	    
	    $scope.myChartObject.type = $scope.selectedChart;
	    
	    $scope.onions = [
	        {v: 44},
	        {v: 3},
	    ];

	    $scope.myChartObject.data = {"cols": [
	        {id: "t", label: "Size", type: "string"},
	        {id: "s", label: "Customers", type: "number"}
	    ], "rows": [
	    ]};

	    $scope.myChartObject.options = {
	        'title': 'Slim Model'
	    };
		
	}]);
})();