var app = angular.module('app', ['pascalprecht.translate']);

app.config(['$translateProvider',function($translateProvider) {
	
	$translateProvider.translations('pt-br',{
		TITULO : "Seja bem vindo",
		PARAGRAFO1 : "Essa é uma página de inicio",
		PTBR_BTN : "PT BR",
		EN_BTN : "English"
	});

	$translateProvider.translations('en',{
		TITULO : "Welcome",
		PARAGRAFO1 : "This is a hello pagina",
		PTBR_BTN : "Portugues",
		EN_BTN : "Inglês"
	});

	$translateProvider.preferredLanguage('pt-br');

}])

app.controller('aula20controller', ['$scope','$translate', function($scope, $translate){

	$scope.setaIdioma = function(sigla){
		$translate.use(sigla);
	}
	
}]);