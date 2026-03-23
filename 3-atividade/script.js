function calcular() {
    // 1. Entrada de dados
    const n1 = parseFloat(document.getElementById("n1").value);
    const n2 = parseFloat(document.getElementById("n2").value);
    const n3 = parseFloat(document.getElementById("n3").value);
    
    // 2. Referência do HTML
    const elementoResultado = document.getElementById("media");
    
    
    // 3. Validação (Sua lógica está perfeita aqui!)
    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        alert("Ei! Digite os números para continuar!");
        return;
    }
    
    // 4. Cálculo
    const valorMedia = (n1 + n2 + n3) / 3;

    // 5. Lógica de exibição (Simplificada)
    // Em vez de repetir a linha nos dois blocos, fazemos uma vez só:
    elementoResultado.innerText = `Média: ${valorMedia.toFixed(2)}`;

    // 6. Lógica de cor (Opcional, mas recomendada para Dashboard)
    if (valorMedia >= 7) {
        elementoResultado.style.color = "#10b981"; // Verde se aprovado
    } else {
        elementoResultado.style.color = "#ef4444"; // Vermelho se reprovado
    }
}