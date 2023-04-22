const wordList = ["amor", "beleza", "caminho", "desejo", "esperança", "felicidade", "gratidão", "harmonia", "juventude", "liberdade", "mágica", "natureza", "paz", "qualidade", "riqueza", "saúde", "trabalho", "união", "vitória", "xícara", "zero", "abacate", "banana", "cachorro", "dinheiro", "escada", "futebol", "girassol", "hotel", "igreja", "jardim", "kiwi", "limão", "mamão", "noite", "olho", "palavra", "queijo", "rosa", "sabão", "tênis", "uva", "viagem", "xadrez", "yoga", "zebra", "água", "bolo", "carro"];
let wordToGuess
let guessedLetters;
let wrongGuesses;
const restartButton = document.querySelector('.botao-reset')

setWordToGuess()

function setWordToGuess() {
  
  //Inicializando as variáveis
  wordToGuess = wordList[Math.floor(Math.random() * wordList.length)];
  guessedLetters = [];
  wrongGuesses = 0;
  document.querySelector('.wrong-guesses').textContent = ""

  // Palavra a ser adivinhada
  let wordDisplay = "";
  for (let i = 0; i < wordToGuess.length; i++) {
    wordDisplay += "_ ";
  } 
  document.querySelector(".word-display").textContent = wordDisplay;

}

// Ouvinte de evento do formulário
document.querySelector(".botao-jogar").addEventListener("submit", )
document.querySelector(".guess-form").addEventListener("submit", function(event) {
  event.preventDefault();
  const guessInput = document.querySelector(".guess-input");
  const guess = guessInput.value.toLowerCase();
  guessInput.value = "";
  
  // Verifica se a letra já foi adivinhada
  if (guessedLetters.includes(guess)) {
    alert("Você já tentou essa letra antes!");
    return;
  }
  
  // Adiciona a letra adivinhada à lista de letras adivinhadas
  guessedLetters.push(guess);
  
  // Verifica se a letra está na palavra a ser adivinhada
  if (wordToGuess.includes(guess)) {
    // Atualiza a palavra com a letra adivinhada
    let newWordDisplay = "";
    for (let i = 0; i < wordToGuess.length; i++) {
      if (guessedLetters.includes(wordToGuess[i])) {
        newWordDisplay += wordToGuess[i] + " ";
      } else {
        newWordDisplay += "_ ";
      }
    }
    document.querySelector(".word-display").textContent = newWordDisplay;
    
    // Verifica se todas as letras foram adivinhadas
    if (!newWordDisplay.includes("_")) {
      alert("Você ganhou!");
    }
  } else {
    // Atualiza a lista de letras erradas e verifica se o jogador perdeu
    wrongGuesses++;
    document.querySelector(".wrong-guesses").textContent += guess + " ";
    if (wrongGuesses === 6) {
      alert("Você perdeu!");
      document.querySelector('.word-display').textContent = wordToGuess
    }
  }
});

document.querySelector('.botao-reset').addEventListener("click", function restartGame(){
  setWordToGuess()
})