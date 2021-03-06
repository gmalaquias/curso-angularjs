var app = angular.module('app', ['ngResource']);

app.factory('Livros', ['$resource', function($resource){
	
	return $resource('api/livros/:livroid', { livroid :  '@livroid' });

}])

app.controller('aula15controller', ['$scope', 'Livros', function($scope, Livros){

	$scope.carregaLivros = function () {
		Livros.get(function(data){
			console.log(data);
		});
	}

	$scope.getLivro = function(livroid){
		Livros.get({livroid : livroid}, function(data){
			console.log(data);
		});
	}

	$scope.salvarLivro = function(){
		livro = {
			"id" : 40,
			"titulo" : "Curso de angularJs"
		}

		Livros.save({}, livro, function(data){
			console.log(data);
		});
	}
		
}]);
