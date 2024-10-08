//onde imprime a senha
const senhaInput = document.getElementById('senha');
const gerarSenhaBotao = document.getElementById('gerar-senha');
const numeroCaracteresInput = document.getElementById('numero-caracteres');

//opções checkbox
const minuscula = document.getElementById('minusculas');
const maiuscula = document.getElementById('maiusculas');
const numero = document.getElementById('numeros');
const simbolo = document.getElementById('simbolos');

gerarSenhaBotao.addEventListener('click', gerarSenha);

function gerarSenha() {
    const tamanhoSenha = parseInt(numeroCaracteresInput.value);
    const caracteres = [];

    if (!maiuscula.checked && !minuscula.checked && !numero.checked && !simbolo.checked) {
        caracteres.push(...'abcdefghijklmnopqrstuvwxyz');
    } else {
        if (maiuscula.checked) {
            caracteres.push(...'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
        }
        if (minuscula.checked) {
            caracteres.push(...'abcdefghijklmnopqrstuvwxyz');
        }
        if (numero.checked) {
            caracteres.push(...'0123456789');
        }
        if (simbolo.checked) {
            caracteres.push(...'!@#$%^&*()_+-={}:<>?');
        }
    }
    const senha = [];
    for (let i = 0; i < tamanhoSenha; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        senha.push(caracteres[indiceAleatorio]);
    }

    senhaInput.value = senha.join('');
}