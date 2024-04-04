function calcularIMC() {
  var nome = document.getElementById("nome").value;
  var peso = parseFloat(document.getElementById("peso").value);
  var altura = parseFloat(document.getElementById("altura").value);

  var imc = peso / (altura * altura);
  var mensagem;

  if (isNaN(imc)) {
    mensagem = "Por favor, insira valores válidos para peso e altura.";
  } else {
    var imcFormatado = imc.toFixed(2);
    mensagem = nome + ", seu IMC é " + imcFormatado + ".";
  }

  document.getElementById("resultado").innerText = mensagem;
}

function apagar() {
  var nome = document.getElementById("nome").value = null;
  var peso = parseFloat(document.getElementById("peso").value = null);
  var altura = parseFloat(document.getElementById("altura").value = null);
  document.getElementById("resultado").innerText = null;
}