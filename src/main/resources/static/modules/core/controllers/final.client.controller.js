(function(app){
	'use strict';
	angular.module('core').controller('finalController',['$scope','detailService','$location',function($scope,detailService,$location){

		$scope.currentConfig = detailService.currentConfig;
		$scope.combinations = [];
		if($scope.currentConfig.length !== 0)
			{
			console.log("inside adding old combination1");
			var config;
			angular.forEach($scope.currentConfig,function(config,index){
				
					$scope.combinations.push(config);
					
			});

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
		
		$scope.submit = function()
		{
			console.log("submit called");
			console.log($scope.customerInfo);
			console.log($scope.combinations);
			var feedbacks=[];		
			var feedback={};
			angular.forEach($scope.combinations,function(combination,index){
				feedback={product: combination.product, size :combination.size, model :combination.model, color : combination.color};
				if(combination!==undefined && combination.product!==undefined)
				{
					feedbacks.push(feedback);
				}
				feedback={};
				
			});
			
			if(feedbacks!==undefined && feedbacks.length>0  )
			{
				var finalFeedback={emailId:$scope.customerInfo.emailId, requirements : feedbacks};
				console.log("finalFeedback",finalFeedback);
				detailService.submitFeedback(finalFeedback).then(function(response){
				console.log("submitFeedback response",response);
					if(response==null)
					{
					console.log("feedback not added");
					}
				else
					{
					console.log("feedback added");
					}
				});
			}
			
			detailService.addCustomer($scope.customerInfo).then(function(response){
				console.log("addcustomer response",response);
				if(response.data===null || response.data==='')
					{
					console.log("customer existing");
					}
				else
					{
					console.log("customer registered");
					}
				
			});
			$location.path('thankyou');
			
			
		}
		
	}]);
})();