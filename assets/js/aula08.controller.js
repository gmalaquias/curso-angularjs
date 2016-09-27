app.controller("aula08Controller", function($scope){

	$scope.estados = ['SP', 'RS', 'BH', 'BA', 'RJ', 'SC'];
	$scope.estados.sort();

	$scope.pessoa = novaPessoa();

	$scope.pessoas = [];

	$scope.salvarPessoa = function(pessoa){
		$scope.pessoas.push(pessoa);
		$scope.pessoa = novaPessoa();

		$scope.frm.$setUntouched();		
		$scope.frm.$setPristine();	
	}

});

function novaPessoa(){
	return {
		nome: "",
		email: "",
		sexo: "M",
		estado : "SP"
	}
}