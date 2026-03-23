function verificar() {
  let codigo = document.getElementById("codigo").value;
  let anoNascimento = Number(document.getElementById("anoNascimento").value);
  let tempoTrabalho = Number(document.getElementById("tempoTrabalho").value);

  let anoAtual = new Date().getFullYear();
  let idade = anoAtual - anoNascimento;

  let mensagem;

  // Regra: precisa cumprir pelo menos UM requisito
  if (idade >= 65 || tempoTrabalho >= 30) {
    mensagem = "Requerer aposentadoria";
  } else {
    mensagem = "Não requerer aposentadoria";
  }

  document.getElementById("resultado").innerHTML =
    "Código: " + codigo + "<br>" +
    "Idade: " + idade + "<br>" +
    "Tempo de trabalho: " + tempoTrabalho + " anos<br>" +
    "Situação: " + mensagem;
}