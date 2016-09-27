app.controller('aula09controller', ['$scope', 'operacoes', 'pessoa', function($scope, operacoes, pessoa){
	
	console.log(operacoes.somar(1,2));

	$scope.pessoa = new pessoa();

}]);		

app.controller('aula09controller2', ['$scope', 'operacoes', 'pessoa', function($scope, operacoes, pessoa){
	
	$scope.pessoa = new pessoa();
	$scope.pessoa.nome = "Gabriel";

}]);		