app.factory('pessoa', function(){
	var pessoa = function(){
		this.nome = "";
		this.idade = "";
		this.estado = 'SP';
		this.sexo = "M";

		this.cumprimentar = function(){
			return "Ola " + this.nome;
		}
	}

	return pessoa;
});