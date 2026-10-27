const ButtonColor = document.getElementById('ButtonColor');
const Cuby = document.getElementById('Cuby');

const CubyColors = { 
  Blue: "blue", 
  Green: "green", 
  red: "red", 
  yellow: "yellow" 
};

ButtonColor.addEventListener('click', () => {
  // Transforma os valores do objeto em uma lista (array)
  const colorsArray = Object.values(CubyColors);
  
  // Sorteia um índice aleatório da lista
  const randomColor = colorsArray[Math.floor(Math.random() * colorsArray.length)];
  
  // Altera a cor de fundo do elemento Cuby
  Cuby.style.backgroundColor = randomColor;
});
