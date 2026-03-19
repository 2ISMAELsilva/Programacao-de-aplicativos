function verificarvoto() {
    // 1. Pega o valor (idade) que o usuário digitou no input
    let idadeInput = document.getElementById('idade').value;
    // 2. Seleciona o parágrafo onde o resultado vai aparecer
    let resultado = document.getElementById('Resultado');

    // Verifica se o usuário não digitou nada
    if (idadeInput === '') {
        resultado.innerHTML = "Por favor, digite uma idade válida! 😅";
        resultado.style.color = "#ffdd59"; // Amarelinho para alerta
        reiniciarAnimacao(resultado);
        return; // Para a execução da função aqui
    }

    // Transforma o texto digitado em um número inteiro
    let idade = parseInt(idadeInput);

    // 3. Lógica da Votação no Brasil
    if (idade < 16) {
        resultado.innerHTML = "Você ainda não pode votar. ❌";
        resultado.style.color = "#ff4757"; // Vermelho
    } else if ((idade >= 16 && idade < 18) || idade >= 70) {
        resultado.innerHTML = "Seu voto é facultativo! ⚖️";
        resultado.style.color = "#ffa502"; // Laranja
    } else {
        resultado.innerHTML = "Seu voto é obrigatório! ✅";
        resultado.style.color = "#2ed573"; // Verde
    }

    // Chama a funçãozinha abaixo para fazer o texto "pular" toda vez que clicar
    reiniciarAnimacao(resultado);
}

// Função extra para garantir que a animação CSS rode toda vez que o botão for clicado
function reiniciarAnimacao(elemento) {
    elemento.style.animation = 'none';
    elemento.offsetHeight; /* Força o navegador a recalcular a tela */
    elemento.style.animation = 'popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
}

const inputIdade = document.getElementById("idade");

// Depois, adicionamos o evento que "ouve" o teclado
inputIdade.addEventListener("keydown", function(event){
    // Se a tecla apertada for o "Enter"...
    if(event.key === "Enter"){
        // ...nós chamamos a função de verificar o voto!
        verificarvoto();
    }
});
