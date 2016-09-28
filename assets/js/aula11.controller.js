
var app = angular.module('app', ['ngRoute'])

.controller('aula11controller', function($scope, $route, $routeParams, $location){

	$scope.$route = $route;
	$scope.$location = $location;
	$scope.$routeParams = $routeParams;	

})	

.controller('inicialcontroller', function($scope){
	console.log("controller inicial");
})
.controller('pagina1controller', function($scope){
	console.log("controller pagina1");
})
.controller('pagina2controller', function($scope, $routeParams){
	
	$scope.parametros = $routeParams;

	console.log("controller pagina2");
	console.log("id do produto " + $scope.parametros.idproduto);
})
.config(function($routeProvider, $locationProvider) {
	
	$routeProvider
		.when('/', {
			templateUrl: 'aula11_inicial.html',
			controller : 'inicialcontroller'
		})
		.when('/Pagina1',{
			templateUrl: 'aula11_pagina1.html',
			controller : 'pagina1controller'
		})
		.when('/Pagina2/:idproduto', {
			templateUrl: 'aula11_pagina2.html',
			controller : 'pagina2controller'
		})
		.otherwise({
			redirectTo : "/"
		});

	$locationProvider.html5Mode(true);	
});