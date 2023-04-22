const elementos = document.querySelectorAll("[data-cell]");
const board = document.querySelector("[data-board]");
const mensagemVitoriaTextElement = document.querySelector("[data-winning-message-text]");
const mensagemVitoria = document.querySelector("[data-winning-message]");
const botaoRestart = document.querySelector("[data-restart-button]");

let vezCirculo;

const combinacoesVitoria = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const startGame = () => {
  vezCirculo = false;

  for (const cell of elementos) {
    cell.classList.remove("circle");
    cell.classList.remove("x");
    cell.addEventListener("click", handleClick, { once: true });
  }

  setBoardHoverClass();
  mensagemVitoria.classList.remove("mostrar-resultado-jogo");
};

const endGame = (isDraw) => {
  if (isDraw) {
    mensagemVitoriaTextElement.innerText = "Deu velha!";
  } else {
    mensagemVitoriaTextElement.innerText = vezCirculo
      ? "O Venceu!"
      : "X Venceu!";
  }

  mensagemVitoria.classList.add("mostrar-resultado-jogo");
};

const checkForWin = (currentPlayer) => {
  return combinacoesVitoria.some((combination) => {
    return combination.every((index) => {
      return elementos[index].classList.contains(currentPlayer);
    });
  });
};

const checkForDraw = () => {
  return [...elementos].every((cell) => {
    return cell.classList.contains("x") || cell.classList.contains("circle");
  });
};

const placeMark = (cell, classToAdd) => {
  cell.classList.add(classToAdd);
};

const setBoardHoverClass = () => {
  board.classList.remove("circle");
  board.classList.remove("x");

  if (vezCirculo) {
    board.classList.add("circle");
  } else {
    board.classList.add("x");
  }
};

const swapTurns = () => {
  vezCirculo = !vezCirculo;

  setBoardHoverClass();
};

const handleClick = (e) => {
  // Colocar a marca (X ou Círculo)
  const cell = e.target;
  const classToAdd = vezCirculo ? "circle" : "x";

  placeMark(cell, classToAdd);

  // Verificar por vitória
  const isWin = checkForWin(classToAdd);

  // Verificar por empate
  const isDraw = checkForDraw();

  if (isWin) {
    endGame(false);
  } else if (isDraw) {
    endGame(true);
  } else {
    // Mudar símbolo
    swapTurns();
  }
};

startGame();

botaoRestart.addEventListener("click", startGame);
