const barra = document.getElementById('numero-caracteres');
const valorBarra = document.getElementById('valor-selecionado');

barra.addEventListener('input', () => {
    //para que o span imprima o valor selecionado na barra
    valorBarra.textContent = barra.value;
})


//aplica a estilização ao componente barra 
barra.oninput = function(){
    var valor = (this.value - this.min) / (this.max - this.min) * 100;
    this.style.background = `linear-gradient(to right, #FFFFFF 0%, #FFFFFF ${valor}%, #2C1746 ${valor}%, #2C1746 100%)`;
}