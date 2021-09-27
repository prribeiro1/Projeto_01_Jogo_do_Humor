const imgnaruto = document.getElementById('imagem');
const modonaruto = document.getElementById('modo');
const botaonaruto = document.getElementById('btn1');

botaonaruto.onclick = function () {
    if (botaonaruto.value === 'naruto_genin') {
        botaonaruto.value = 'naruto_ship';
        imgnaruto.src = 'naruto_ship.png';
        modonaruto.textContent = 'Naruto Shippudden';
        
    }
    else if (botaonaruto.value === 'naruto_ship') {
        botaonaruto.value = 'naruto_sabio';
        imgnaruto.src = 'naruto_sabio.png';
        modonaruto.textContent = 'Naruto Modo Sábio';
        
    }
    else if (botaonaruto.value === 'naruto_sabio') {
        botaonaruto.value = 'naruto_9caudas';
        imgnaruto.src = 'naruto_9caudas.jpeg';
        modonaruto.textContent = 'Naruto Nove Caudas';
        
    }
    else if (botaonaruto.value === 'naruto_9caudas') {
        botaonaruto.value = 'naruto_genin';
        imgnaruto.src = 'naruto_genin.png';
        modonaruto.textContent = 'Naruto Genin';
        
    }
}