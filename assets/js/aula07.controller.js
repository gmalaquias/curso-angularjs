app.controller("aula07Controller", function($scope){

	$scope.nomes = ['Nome', 'Daniel', 'teste', 'Gabriel', 'Thalita']; 

	$scope.pessoas = [];

	$scope.pessoas.push({ nome : 'Gabriel', idade : 24 });
	$scope.pessoas.push({ nome : 'Thalita', idade : 22 });

	$scope.adicionaPessoa = function(){
		var nome = document.getElementById("nomepessoa");
		var idade = document.getElementById("idadepessoa");

		$scope.pessoas.push({ nome : nome.value, idade : idade.value });	

		nome.value = "";
		idade.value = "";	
	}

});