var app = angular.module('app', ['ngAnimate']);

app.controller('aula17controller', function($scope){
    
    $scope.itens = ['1', '2', '3'];
    
    $scope.adicionaItem = function(){
        if($scope.itens.indexOf($scope.itemadd)==-1)
            $scope.itens.push($scope.itemadd);

        $scope.itens.sort();
    }
    
});