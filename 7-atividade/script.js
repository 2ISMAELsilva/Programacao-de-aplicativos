function calcular() {
    // 1. Entrada de dados
    const n1 = parseFloat(document.getElementById("n1").value);
    const n2 = parseFloat(document.getElementById("n2").value);
    const n3 = parseFloat(document.getElementById("n3").value);
    
    // 2. Referência do HTML
    const elementoResultado = document.getElementById("media");
    
    // 3. Validação de preenchimento
    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        alert("Ei! Digite todos os números para continuar!");
        return;
    }

    // 3.1 Validação de valores (conforme o exercício: entre 0 e 10)
    if (n1 < 0 || n1 > 10 || n2 < 0 || n2 > 10 || n3 < 0 || n3 > 10) {
        alert("As notas devem estar entre 0 e 10. Por favor, digite novamente.");
        return;
    }
    
    // 4. Cálculo
    const valorMedia = (n1 + n2 + n3) / 3;

    // 5. Lógica de status e cor baseada no exercício
    let status = "";
    
    if (valorMedia >= 7) {
        status = "Aprovado";
        elementoResultado.style.color = "#10b981"; // Verde
    } else if (valorMedia >= 5) { // Se não é >= 7, mas é >= 5 (ou seja, entre 5 e 6.9)
        status = "em Recuperação";
        elementoResultado.style.color = "#f59e0b"; // Laranja/Amarelo
    } else {
        status = "Reprovado";
        elementoResultado.style.color = "#ef4444"; // Vermelho
    }

    // 6. Exibição do resultado final
    elementoResultado.innerText = `Média: ${valorMedia.toFixed(2)} - Aluno ${status}`;
}