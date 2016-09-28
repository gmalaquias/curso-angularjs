app.controller('aula10controller', ['$scope', 'saudacaoFilter', function($scope, saudacaoFilter){
	
	console.log(saudacaoFilter('Gabriel Malaquias'));

	$scope.pessoa = {
		nome: "Gabriel Malaquias",
		idade: 24
	}

}]);		