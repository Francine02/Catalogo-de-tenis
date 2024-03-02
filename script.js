const imgOp = document.getElementById('img');
const buttonRed = document.getElementById('red');
const buttonPink = document.getElementById('pink');
const buttonBlack = document.getElementById('black');

function changeColorRed () {
    imgOp.src = './img/red.png';
    buttonRed.innerHTML = '<input type="radio" name="op-color" id="red"' + checked +'>';
};

function changeColorPink () {
    imgOp.src = './img/pink.png';
    buttonPink.innerHTML = '<input type="radio" name="op-color" id="pink' + checked +'>';
};

function changeColorBlack () {
    imgOp.src = './img/black.png';
    buttonBlack.innerHTML = '<input type="radio" name="op-color" id="black' + checked +'>';
};

buttonRed.addEventListener('click', changeColorRed);
buttonPink.addEventListener('click', changeColorPink);
buttonBlack.addEventListener('click', changeColorBlack);