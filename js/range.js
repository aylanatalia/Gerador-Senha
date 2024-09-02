const barra = document.getElementById('numero-caracteres');
const valorBarra = document.getElementById('valor-selecionado');



barra.addEventListener('input', () => {
    //para que o span imprima o valor selecionado na barra
    valorBarra.textContent = barra.value;

    //para mudar a cor da barra
    const thumbPosition = (barra.value / barra.max) * 100;
    barra.style.setProperty('--thumb-position', `${thumbPosition}%`)
})

