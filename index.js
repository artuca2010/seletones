const ButtonColor = document.getElementById('ButtonColor');
const ButtonMove = document.getElementById('Move')
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

let ActualPos = 0;

ButtonMove.addEventListener('click', () => {
    const novaPosicao = ActualPos + 2; 

    Cuby.animate([
        { transform: `translateX(${ActualPos}vw)` },
        { transform: `translateX(${novaPosicao}vw)` }
    ], {
        duration: 300
        easing: 'ease-in-out',
        fill: 'forwards'
    });

    ActualPos = novaPosicao;
});
