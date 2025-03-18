let listaDeAmigos = [];

function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();

    if (nomeAmigo === '') {
        alert('Por favor, digite um nome antes de adicionar.');
        return;
    }

    listaDeAmigos.push(nomeAmigo);
    atualizarListaAmigos();
    inputAmigo.value = '';
    inputAmigo.focus();
}

function atualizarListaAmigos() {
    const listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = '';

    listaDeAmigos.forEach(function (amigo) {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaHTML.appendChild(li);
    });
}

function sortearAmigo() {
    const resultadoHTML = document.getElementById('resultado');
    resultadoHTML.innerHTML = '';

    if (listaDeAmigos.length === 0) {
        alert('Adicione ao menos um amigo antes de sortear!');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);
    const amigoSorteado = listaDeAmigos[indiceSorteado];

    const liResultado = document.createElement('li');
    liResultado.textContent = `Amigo secreto sorteado: ${amigoSorteado}! 🎉`;
    resultadoHTML.appendChild(liResultado);

    const listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = '';

    const botaoSortear = document.querySelector('.button-draw');
    botaoSortear.innerHTML = `<img src="assets/play_circle_outline.png" alt="Ícone para novo sorteio"> Novo sorteio`;
    botaoSortear.setAttribute('onclick', 'resetarSorteio()');
}

function resetarSorteio() {
    listaDeAmigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('amigo').value = '';

    const botaoSortear = document.querySelector('.button-draw');
    botaoSortear.innerHTML = `<img src="assets/play_circle_outline.png" alt="Ícone para sortear"> Sortear amigo`;
    botaoSortear.setAttribute('onclick', 'sortearAmigo()');
}
