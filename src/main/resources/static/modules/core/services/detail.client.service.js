(function(){
	'use strict';
	
	angular.module('core').factory('detailService',['$http',function($http){
		return{
			getConfig:function(category){
				console.log("category = ",category);
				 return $http.get("/inventory/config/"+category).then(function(response){
					return response; 
				 });
			
			},
				submitFeedback:function(feedback){
					console.log("feedback = ",feedback);
					 return $http.post("/feedback",feedback).then(function(response){
						return response; 
					 });
				
				},	
					addCustomer:function(customerInfo){
						console.log("customerInfo = ",customerInfo);
						 return $http.post("/feedback/customer",customerInfo).then(function(response){
							return response; 
						 });
					
					},
			currentConfig:[]
		};
	}]);
})();