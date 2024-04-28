let tentativas = 0;
let sucessoObtido = false;

function verificarSucesso() {
    if (sucessoObtido) return; // Se já tiver sucesso, não faz nada

    tentativas++;
    const porcentagemSucesso = parseFloat(document.getElementById('porcentagem').value) / 100; // Converte a porcentagem para um valor decimal
    const sucesso = Math.random() < porcentagemSucesso; // Usa a porcentagem inserida pelo usuário
    const msgElement = document.getElementById('msg');
    const botaoTenteNovamente = document.getElementById('botaoTenteNovamente');

    if (sucesso) {
        msgElement.textContent = `Sucesso! Tentativas: ${tentativas}`;
        document.getElementById('botaoSubmit').disabled = true; // Desabilita o botão de submit
        botaoTenteNovamente.style.display = 'block'; // Exibe o botão "Tente novamente"
        sucessoObtido = true;
    } else {
        msgElement.textContent = `Tentativas: ${tentativas}`;
    }
}

function reiniciar() {
    tentativas = 0;
    document.getElementById('msg').textContent = '';
    document.getElementById('botaoSubmit').disabled = false; // Habilita o botão de submit novamente
    document.getElementById('botaoTenteNovamente').style.display = 'none'; // Oculta o botão "Tente novamente"
    sucessoObtido = false;
}