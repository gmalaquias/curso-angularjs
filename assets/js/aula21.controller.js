var app = angular.module('app', ['angularFileUpload']);

app.controller('aula21controller', ['$scope', 'FileUploader', function($scope,FileUploader){

	var uploader = $scope.uploader = new FileUploader({
		url : 'api/upload.php'
	});

	//limite de arquivos
	uploader.filters.push({
		name : "tamanhoFila",
		fn : function(item, options){
			return this.queue.length < 4;
		}
	});

	uploader.onSuccessItem = function(fileItem){
		console.log("Item enviado com sucesso");
		fileItem.remove();
	};

	uploader.onWhenAddingFileFailed = function(fileItem){
		console.info("Erro ao adicionar arquivo", fileItem);
	};
	
}]);