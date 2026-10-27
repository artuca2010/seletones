const ButtonColor = document.getElementById('ButtonColor');
const ButtonMoveLeft = document.getElementById('MoveLeft');
const ButtonMoveRight = document.getElementById('MoveRight');
const ButtonMoveFoward = document.getElementById('MoveFoward');
const ButtonMoveBack = document.getElementById('MoveBack');
const Cuby = document.getElementById('Cuby');

const CubyColors = {
  Blue: { bg: "blue", shadow: "0 0 15px #3333ff, 0 0 30px #6666ff" },
  Green: { bg: "green", shadow: "0 0 15px #33ff33, 0 0 30px #66ff66" },
  Red: { bg: "red", shadow: "0 0 15px #ff3333, 0 0 30px #ff6666" },
  Yellow: { bg: "yellow", shadow: "0 0 15px #ffff33, 0 0 30px #ffff66" }
};

ButtonColor.addEventListener('click', () => {
  const colorsArray = Object.values(CubyColors);
  const randomColorObj = colorsArray[Math.floor(Math.random() * colorsArray.length)];
  Cuby.style.backgroundColor = randomColorObj.bg;
  Cuby.style.boxShadow = randomColorObj.shadow;
});

let ActualPosX = 0;
let ActualPosY = 0;

function moverCuby(novaPosicaoX, novaPosicaoY) {
  Cuby.animate([
    { transform: `translate(${ActualPosX}vw, ${ActualPosY}vw)` },
    { transform: `translate(${novaPosicaoX}vw, ${novaPosicaoY}vw)` }
  ], {
    duration: 300,
    easing: 'ease-in-out',
    fill: 'forwards'
  });

  ActualPosX = novaPosicaoX;
  ActualPosY = novaPosicaoY;
}

ButtonMoveLeft.addEventListener('click', () => {
  const novaPosicaoX = ActualPosX - 2;
  moverCuby(novaPosicaoX, ActualPosY);
});

ButtonMoveRight.addEventListener('click', () => {
  const novaPosicaoX = ActualPosX + 2;
  moverCuby(novaPosicaoX, ActualPosY);
});

ButtonMoveFoward.addEventListener('click', () => {
  const novaPosicaoY = ActualPosY - 2; 
  moverCuby(ActualPosX, novaPosicaoY);
});

ButtonMoveBack.addEventListener('click', () => {
  const novaPosicaoY = ActualPosY + 2; 
  moverCuby(ActualPosX, novaPosicaoY);
});

window.addEventListener('keydown', (event) => {
    const tecla = event.key.toUpperCase(); 

    if (tecla === 'W') {
        ButtonMoveFoward.click();
    } else if (tecla === 'S') {
        ButtonMoveBack.click();
    } else if (tecla === 'A') {
        ButtonMoveLeft.click();
    } else if (tecla === 'D') {
        ButtonMoveRight.click();
    }
});
