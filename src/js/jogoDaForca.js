const wordList = ["amor", "beleza", "caminho", "desejo", "esperança", "felicidade", "gratidão", "harmonia", "independência", "juventude", "liberdade", "mágica", "natureza", "oportunidade", "paz", "qualidade", "riqueza", "saúde", "trabalho", "união", "vitória", "xícara", "zero", "abacate", "banana", "cachorro", "dinheiro", "escada", "futebol", "girassol", "hotel", "igreja", "jardim", "kiwi", "limão", "mamão", "noite", "olho", "palavra", "queijo", "rosa", "sabão", "tênis", "uva", "viagem", "xadrez", "yoga", "zebra", "água", "bolo", "carro"];
const wordToGuess = wordList[Math.floor(Math.random() * wordList.length)];
const restartButton = document.querySelector('.botao-reset')

// Inicialize as variáveis
let guessedLetters = [];
let wrongGuesses = 0;

// Crie o display inicial da palavra a ser adivinhada
let wordDisplay = "";
for (let i = 0; i < wordToGuess.length; i++) {
  wordDisplay += "_ ";
}
document.querySelector(".word-display").textContent = wordDisplay;

// Adicione um ouvinte de evento ao formulário de adivinhação
document.querySelector(".guess-form").addEventListener("submit", function(event) {
  event.preventDefault();
  const guessInput = document.querySelector(".guess-input");
  const guess = guessInput.value.toLowerCase();
  guessInput.value = "";
  
  // Verifique se a letra já foi adivinhada
  if (guessedLetters.includes(guess)) {
    alert("Você já tentou essa letra antes!");
    return;
  }
  
  // Adicione a letra adivinhada à lista de letras adivinhadas
  guessedLetters.push(guess);
  
  // Verifique se a letra está na palavra a ser adivinhada
  if (wordToGuess.includes(guess)) {
    // Atualize o display da palavra a ser adivinhada com a letra adivinhada
    let newWordDisplay = "";
    for (let i = 0; i < wordToGuess.length; i++) {
      if (guessedLetters.includes(wordToGuess[i])) {
        newWordDisplay += wordToGuess[i] + " ";
      } else {
        newWordDisplay += "_ ";
      }
    }
    document.querySelector(".word-display").textContent = newWordDisplay;
    
    // Verifique se todas as letras foram adivinhadas
    if (!newWordDisplay.includes("_")) {
      alert("Você ganhou!");
    }
  } else {
    // Atualize a lista de letras erradas e verifique se o jogador perdeu
    wrongGuesses++;
    document.querySelector(".wrong-guesses").textContent += guess + " ";
    if (wrongGuesses === 6) {
      alert("Você perdeu!");
      document.querySelector('.word-display').textContent = wordToGuess
    }
  }
});
document.querySelector('.botao-reset').addEventListener("submit", event.preventDefault())