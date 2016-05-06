'use strict';
angular.module(ApplicationConfiguration.applicationModuleName,ApplicationConfiguration.applicationModuleVendorDependencies);

angular.module(ApplicationConfiguration.applicationModuleName).config(['$locationProvider','$httpProvider',function($locationProvider,$httpProvider){
	//$locationProvider.html5Mode(true);
}]);

angular.element(document).ready(function(){
	angular.bootstrap(document,[ApplicationConfiguration.applicationModuleName]);
});