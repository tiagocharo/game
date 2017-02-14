
var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");

$(function(){
	atualizaTexto();
	inicializaContadores();
	inicializaCronometro();
	$("#botao-reiniciar").click(reiniciaJogo);		
});

function atualizaTexto() {
	var texto = $(".texto").text();					
	var numPalavras = texto.split(" ").length;
	var tamanhoFrase = $("#tamanho-frase");
	tamanhoFrase.text(numPalavras);
}

function inicializaContadores() {
	campo.on("input", function(){
		var conteudo = campo.val();

		var quantPalavras = conteudo.split(" ").length;
		$("#contador-palavras").text(quantPalavras);

		var quantCaracteres = conteudo.length;	
		$("#contador-caracteres").text(quantCaracteres);
		
	});
}

function inicializaCronometro(){	
	var tempoDigitacao = $("#tempo-digitacao").text();
	campo.one("focus", function(){

		var cronometroID = setInterval(function(){
			tempoDigitacao--;
			$("#tempo-digitacao").text(tempoDigitacao);
			if(tempoDigitacao < 1){
				campo.attr("disabled", true);
				clearInterval(cronometroID);
				campo.toggleClass("campo-desativado");
			}
		},1000);	
	});
}
	
function reiniciaJogo() {
	campo.attr("disabled", false);
	campo.val("");
	$("#contador-palavras").text("0");
	$("#contador-caracteres").text("0");
	$("#tempo-digitacao").text(tempoInicial);
	inicializaCronometro();
	campo.toggleClass("campo-desativado");
	
}

