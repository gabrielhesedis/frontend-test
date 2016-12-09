/* Funções de validação de campo */
function valida_nome(nome){		
	if(nome){
		var check_regex = nome.match(/^[a-záàâãéèêíïóôõöúçñ ]+$/ig);
		return (!check_regex) ? false : true;		
	}else{
		return false;
	}
}

function valida_telefone(telefone){
	if(telefone){
		var check_regex = telefone.match(/^[0-9\-()]+$/g);
		return (!check_regex) ? false : true;
	}else{
		return false;
	}
}

function valida_email(email){		
	if(email){
		var check_regex = email.match(/[A-Z0-9._-]+@[A-Z0-9.-]+\.[A-Z0-9._-]{2,4}/ig);

		if(!check_regex){
			return false;
		}else{
			$("#txt_email").empty();
			$("#txt_email").val(check_regex);
			return true;
		}
	}else{
		return false;
	}
}
/**********/


/* Gatilhos para executar as funções quando o cursor deixar algum dos campos */
$("#txt_nome").blur(function(e){			
	var nome = $(this).val();

	if(!valida_nome(nome)){
		$("#erro_nome").text("Nome inválido");
		return false;
	}else{
		$("#erro_nome").empty();
	}
});

$("#txt_telefone").blur(function(e){	
	var telefone = $(this).val(); 

	if(!valida_telefone(telefone)){
		$("#erro_telefone").text("Número de telefone inválido");
		return false;
	}else{
		$("#erro_telefone").empty();
	}
});

$("#txt_email").blur(function(e){	
	var email = $(this).val(); 		

	if(!valida_email(email)){
		$("#erro_email").text("Endereço de e-mail inválido");
		return false;
	}else{
		$("#erro_email").empty();
	}
});
/**********/


/* Executa a verificação ao submeter o formulário */
$("form").submit(function(event){
	event.preventDefault();
	
	var contador_erros = 0;
	var nome = $("#txt_nome").val();
	var telefone = $("#txt_telefone").val(); 
	var email = $("#txt_email").val();

	if(!valida_nome(nome)){
		$("#erro_nome").text("Nome inválido");
		contador_erros++;
	}else{
		$("#erro_nome").empty();
	}
	
	if(!valida_telefone(telefone)){
		$("#erro_telefone").text("Número de telefone inválido");
		contador_erros++;
	}else{
		$("#erro_telefone").empty();
	}

	if(!valida_email(email)){
		$("#erro_email").text("Endereço de e-mail inválido");
		contador_erros++;
	}else{
		$("#erro_email").empty();
	}

	if(contador_erros == 0){
		var nome = '<strong>'+nome+'</strong><br>';
		var info = '<p>'+telefone+' - '+'<a href="mailto:'+email+'">'+email+'</a>'+'</p><br>';
		var pessoa = nome + info;

		$("#lista-cadastrados").append(pessoa);
		$("#btn_cancelar").click();
	}

	return false;
});