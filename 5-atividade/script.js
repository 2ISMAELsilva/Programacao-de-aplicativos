function calcular() {
  let qtd = document.getElementById("quantidade").value;
  qtd = Number(qtd);

  if (qtd <= 0 || isNaN(qtd)) {
    document.getElementById("resultado").innerText = "Digite um valor válido.";
    return;
  }

  let preco;

  if (qtd < 12) {
    preco = 1.30;
  } else {
    preco = 1.00;
  }

  let total = qtd * preco;

  document.getElementById("resultado").innerText =
    "Total da compra: R$ " + total.toFixed(2);
}
