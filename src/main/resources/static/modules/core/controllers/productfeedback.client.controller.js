(function(){
	'use strict';
	angular.module('core').controller('productfeedbackController',['$scope','$stateParams','detailService',function($scope,$stateParams,detailService){
		console.log("product feedback controller called");
		$scope.category = $stateParams.categoryId;
		$scope.combinations = [];
		
		detailService.getFeedbackProductWise($scope.category).then(function(response){
			if(response!==undefined && response!=='')
				{
				console.log(response);
				angular.forEach(response,function(configs,index){
					angular.forEach(configs,function(config,index){
					var req=config.requirements;
					angular.forEach(req,function(reqs,index){
						if(reqs.product===$scope.category)
							{
							$scope.combinations.push(reqs);
							
							}
					});
					});
						
				});
				console.log($scope.combinations);
				}
			
		});
		
		
	}]);
})();