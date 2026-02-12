const botaoAdicionar = document.getElementById('botão Adicionar');
const campoTexto= document.getElementById('campo Texto');
const lista = document.getElementById('Lista Aprovados');

botaoAdicionar.addEventListener('click', function()
{    const nome = campoTexto.value;

    if (nome.trim() !== '') {
        const novoItem = document.createElement('li');

        novoItem.textContent = nome;

        lista.appendChild(novoItem);

        campoTexto.value = '';
        campoTexto.focus();
    } else {
        alert('Por favor, digite um nome válido.');
    }

})



