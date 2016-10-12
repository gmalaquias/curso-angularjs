app.directive('tooltip', [function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		// templateUrl: '',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs) {
			
			console.log(iElm);

			iElm.tooltipsy({
				offset : [0,10],
				content : $scope.textoTooltip
			});
		}
	};
}]);


app.controller('aula16controller', ['$scope', function($scope){

	$scope.textoTooltip  = "Esse é o texto do Tooltip";
	
}]);

// $(function(){
// 	$(".tooltip").tooltipsy({
// 		offset : [0,10]
// 	});
// });

