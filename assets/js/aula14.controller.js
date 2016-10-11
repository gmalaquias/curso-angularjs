

app.controller('aula14controller', ['$scope', '$http', function($scope, $http){

	$scope.dados = [];

	$scope.carregaDados = function(){
		$http
			.get("dados.json")	
			.success(function(data){
				$scope.dados = data;
			})
			.error(function(){
				alert("Não foi possivel carregar os dados");
			});
	}
}]);
