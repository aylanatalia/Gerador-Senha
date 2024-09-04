const imagemCopiar = document.getElementById('imagem-copiar');
const botaoCopiar = document.getElementById('botao-copiar');
const inputSenha = document.getElementById('senha');

//evento de clique
imagemCopiar.addEventListener('click', copiarSenha);
botaoCopiar.addEventListener('click', copiarSenha);

function copiarSenha(){
    const senha = inputSenha.value;
    const texto = document.createElement('textarea');
    texto.value = senha;

    document.body.appendChild(texto);
    texto.select();
    document.execCommand('copy');
    document.body.removeChild(texto);
}