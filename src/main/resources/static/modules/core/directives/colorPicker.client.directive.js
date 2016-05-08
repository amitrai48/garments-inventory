angular.module('core').provider('colorPickerConfig',function(){
	var defaultColors=[
	                   {"name":"black","value":"#292421"},
	                   {"name":"Dark Blue","value":"#043E84"},
	                   {"name":"Blue","value":"#33A1DE"},
	                   {"name":"Red","value":"#C82536"},
	                   {"name":"Light Blue","value":"#44B8EA"},
	                   {"name":"Yellow","value":"#FFE600"},
	                   {"name":"Pink","value":"#EE6AA7"},
	                   {"name":"Grey","value":"#787878"},
	                   {"name":"Maroon","value":"#800000"},
	                   {"name":"Orange","value":"#E47833"},
	                   {"name":"Purple","value":"#5C246E"},
	                   {"name":"Green","value":"#00AF33"},
	                   {"name":"Brown","value":"#5C3317"},
	                   {"name":"Light Green","value":"#AEDD3C"}
	];

		this.$get = function(){
		    return {
		        defaultColors: defaultColors
		    }
		};
}).directive('colorPicker',['colorPickerConfig',function(colorPickerConfig){
	return{
		scope:{
			selected : "=?",
			customisedColor: "=colors",
			model:"="
		},
		restrict:'E',
		template:'<ul class="color-picker"><li ng-repeat="color in colors" ng-class="{selected: (color===selected)}" ng-click="pick(color)" ng-style="{\'background-color\':color.value};"><i class="glyphicon glyphicon-ok"></i></li></ul>',
		replace:true,
		link:function(scope,element,attrs){
			console.log("Called dir");
			scope.colors = scope.customisedColor || colorPickerConfig.defaultColors;
			scope.selected = scope.selected || scope.colors[0];
			scope.model = scope.selected;
			scope.pick = function (color) {
                scope.selected = color;
                scope.model = scope.selected;
            };
		}
	}
	
}]);