var app = angular.module('app', ['ngCookies']);

app.controller('aula19controller', ['$scope', '$cookieStore', function($scope, $cookieStore){

	$scope.criarCookie = function(){
		$cookieStore.put("meusDados", { 
										"nome" : "Gabriel Malaquias", 
										"idade" : 24 
									  });
	}

	$scope.getValorCookie = function(){
		console.log($cookieStore.get("meusDados"));
	}

	$scope.removeCookie = function(){
		$cookieStore.remove("meusDados");
	}
	
}]);

app.controller('aula19controller_2', ['$scope', '$cookieStore', function($scope, $cookieStore){

	$scope.getValorCookie2 = function(){
		console.log($cookieStore.get("meusDados"));
	}
	
}]);