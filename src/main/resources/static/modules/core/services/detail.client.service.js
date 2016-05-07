(function(){
	'use strict';
	angular.module('core').factory('detailService',['$http',function($http){
		return{
			getConfig:function(category){
				console.log("category = ",category);
				 return $http.get("/inventory/config/"+category).then(function(response){
					return response; 
				 });
			
			}
		};
	}]);
})();