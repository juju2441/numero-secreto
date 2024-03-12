let listaDeNumSor = [];
let numLimite = 10;
let numeroSecreto = gerarnumaleatorio();
let Ntentativa = 1;

function verificarChute() {

    let chute = document.querySelector('input').value;

    console.log('clico');
    
    if (numeroSecreto == chute) {
        exibirTexto('h1', 'Acertou!');
        let palavraTentativas = Ntentativa > 1 ? 'tentativas' : 'tentativa';
        let mensTenta = 'Voce descobriu o numero secreto com ' + Ntentativa + ' ' + palavraTentativas;
        exibirTexto('p', mensTenta);
        document.getElementById('reiniciar').removeAttribute('disabled')


    } else {
        if (chute > numeroSecreto) {
            exibirTexto('p', 'O numero secreto é menor');
        } else {
            exibirTexto('p', 'O numero secreto é maior');
        }

    }
    Ntentativa = Ntentativa + 1;
    limparCampo()
}
function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function texInicial() {
    exibirTexto('h1', 'Jogo do numero secreto');
    exibirTexto('p', 'Escolha um numero entre 1 e 10');
}

texInicial();

function gerarnumaleatorio() {
    let numEscolhido = parseInt(Math.random() * numLimite + 1);
    let quantidedeElementos = listaDeNumSor.length;

    if (quantidedeElementos == numLimite) {
        listaDeNumSor = [];
    }

    if (listaDeNumSor.includes(numEscolhido)) {
        return gerarnumaleatorio();
    } else {
        listaDeNumSor.push(numEscolhido)
        console.log(listaDeNumSor);
        return numEscolhido;
    }
}


function limparCampo() {
    chute = document.querySelector('input');
    chute.value = ' ';
}

function novoJogo() {
    numeroSecreto = gerarnumaleatorio();
    limparCampo();
    Ntentativa = 1;
    texInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

