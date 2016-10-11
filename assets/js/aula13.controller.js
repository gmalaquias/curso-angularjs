

app.controller('aula13controller', ['$scope', function($scope){
	
	

}]);		


app.directive('ngOla', function(){

	return {
		restrict : 'A',
		scope : {
			ngNome : '@'
		},
		template : '<h1>Olá! {{ngNome}}</h1>',

		controller : ['$scope', function($scope){

			$scope.digaOla = function(nome){
				alert('Ola ' + nome);
			}			

		}],

		link : function(scope, iElement, iAttrs){
			//controla o dom da pagina


			scope.digaOla(iAttrs.ngNome);
		}
	}

});

app.directive('ngOla2', function(){

	return {
		restrict : 'E',
		scope : {
			ngNome : '@'
		},
		template : '<h1>Olá! {{ngNome}}</h1>'
	}

});

app.directive('ngOla3', function(){

	return {
		restrict : 'AEC',
		scope : {
			ngNome : '@'
		},
		template : '<h1>Olá! {{ngNome}}</h1>'
	}

});