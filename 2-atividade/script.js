function calcular() {
    // Pegando os valores e convertendo para número
    const n1 = parseFloat(document.getElementById("n1").value);
    const n2 = parseFloat(document.getElementById("n2").value);

    // Verificando se os campos estão preenchidos
    if (isNaN(n1) || isNaN(n2)) {
        alert("Ei, Treinador! Digite os dois números para continuar.");
        return;
    }

    // Cálculos
    const soma = n1 + n2;
    const media = soma / 2;
    const produto = n1 * n2;
    const maior = Math.max(n1, n2);
    const menor = Math.min(n1, n2);

    // Exibindo no HTML com frases temáticas
    document.getElementById("soma").innerText = `Poder Total (Soma): ${soma}`;
    document.getElementById("media").innerText = `Média de XP: ${media}`;
    document.getElementById("produto").innerText = `Dano Crítico (Produto): ${produto}`;
    document.getElementById("maior").innerText = `Líder do Time (Maior): ${maior}`;
    document.getElementById("menor").innerText = `Caçula do Time (Menor): ${menor}`;
}