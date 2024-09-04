function verificarForcaSenha() {
    //opções checkbox
    const minuscula = document.getElementById('minusculas').checked;
    const maiuscula = document.getElementById('maiusculas').checked;
    const numero = document.getElementById('numeros').checked;
    const simbolo = document.getElementById('simbolos').checked;

    //cores para a barra de foça
    const corFraca = '#E71B32';
    const corMedia = '#FAF408';
    const corForte = '#00FF85';
    const corVazio = '#2C1746';


    let forca = '';
    let corFundo = '';

    switch (true) {
        case !maiuscula && !minuscula && !numero && !simbolo:
        case maiuscula && !minuscula && !numero && !simbolo:
        case !maiuscula && minuscula && !numero && !simbolo:
        case maiuscula && minuscula && !numero && !simbolo:
            forca = 'fraca';
            corFundo = `linear-gradient(to right, ${corFraca} 0%, ${corFraca} 33.33%, ${corVazio} 33.33%, ${corVazio} 100%)`;
            break;
        
        case maiuscula && minuscula && numero && !simbolo:
        case maiuscula && minuscula && simbolo && !numero:
            forca = 'média';
            corFundo = `linear-gradient(to right, ${corMedia} 0%, ${corMedia} 66%, ${corVazio} 66%, ${corVazio} 100%)`;
            break;

        case maiuscula && minuscula && numero && simbolo:
            forca = 'forte';
            corFundo = corForte;
            break;
    }

    const barra = document.getElementById('barra-forca');
    barra.style.background = corFundo;
    console.log(`A senha é ${forca}`);
}


//chama a função a cada click no checkbox
document.getElementById('minusculas').addEventListener('click', verificarForcaSenha);
document.getElementById('maiusculas').addEventListener('click', verificarForcaSenha);
document.getElementById('numeros').addEventListener('click', verificarForcaSenha);
document.getElementById('simbolos').addEventListener('click', verificarForcaSenha);