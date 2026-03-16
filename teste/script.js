function calcular() {
    // Obtendo valores
    const n1 = parseFloat(document.getElementById("n1").value);
    const n2 = parseFloat(document.getElementById("n2").value);

    // Selecionando elementos de saída
    const resSoma = document.getElementById("soma");
    const resMedia = document.getElementById("media");
    const resProd = document.getElementById("produto");
    const resMaior = document.getElementById("maior");
    const resMenor = document.getElementById("menor");

    if (isNaN(n1) || isNaN(n2)) {
        resSoma.innerText = "Faltam recursos no inventário!";
        return;
    }

    // Cálculos
    const soma = n1 + n2;
    const media = soma / 2;
    const produto = n1 * n2;
    const maior = Math.max(n1, n2);
    const menor = Math.min(n1, n2);

    // Saída com termos de Minecraft
    resSoma.innerText = `Total de Blocos: ${soma}`;
    resMedia.innerText = `Média de XP: ${media}`;
    resProd.innerText = `Encantamento (Prod.): ${produto}`;
    resMaior.innerText = `Pilha Maior: ${maior}`;
    resMenor.innerText = `Pilha Menor: ${menor}`;
}