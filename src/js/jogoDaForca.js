const listaPalavras = ["amor", "beleza", "caminho", "desejo", "esperança", "felicidade", "gratidao", "harmonia", "juventude", "liberdade", "magica", "natureza", "paz", "qualidade", "riqueza", "saude", "trabalho", "uniao", "vitoria", "xicara", "zero", "abacate", "banana", "cachorro", "dinheiro", "escada", "futebol", "girassol", "hotel", "igreja", "jardim", "kiwi", "limao", "mamao", "noite", "olho", "palavra", "queijo", "rosa", "sabao", "tenis", "uva", "viagem", "xadrez", "yoga", "zebra", "agua", "bolo", "carro"];
let palavraParaAdivinhar
let tentativas;
let letrasErradas;
const restartButton = document.querySelector('.botao-reset')

geradorPalavra()

function geradorPalavra() {
  
  //Inicializando as variáveis
  palavraParaAdivinhar = listaPalavras[Math.floor(Math.random() * listaPalavras.length)];
  tentativas = [];
  letrasErradas = 0;
  document.querySelector('.wrong-guesses').textContent = ""

  // Palavra a ser adivinhada
  let display = "";
  for (let i = 0; i < palavraParaAdivinhar.length; i++) {
    display += "_ ";
  } 
  document.querySelector(".word-display").textContent = display;

}

const form = document.querySelector(".guess-form"); // Selecionar o formulário
const submitButton = document.querySelector(".botao-jogar");
// Ouvinte de evento do formulário
const handleSubmit = function(event) {
  event.preventDefault();
  const palpiteInput = document.querySelector(".guess-input");
  const palpite = palpiteInput.value.toLowerCase();
  palpiteInput.value = "";

  
  // Verifica se a letra já foi adivinhada
  if (tentativas.includes(palpite)) {
    alert("Você já tentou essa letra antes!");
    return;
  }

  tentativas.push(palpite);
  
  // Verifica se a letra está na palavra a ser adivinhada
  if (palavraParaAdivinhar.includes(palpite)) {
    let newDisplay = "";
    for (let i = 0; i < palavraParaAdivinhar.length; i++) {
      if (tentativas.includes(palavraParaAdivinhar[i])) {
        newDisplay += palavraParaAdivinhar[i] + " ";
      } else {
        newDisplay += "_ ";
      }
    }
    document.querySelector(".word-display").textContent = newDisplay;
    
    // Verifica se todas as letras foram adivinhadas
    if (!newDisplay.includes("_")) {
      document.querySelector('.display-end-game').textContent = "Parabéns! Você ganhou!"

      $('#modal-resultado').modal('show');
    }
  } else {
    // Atualiza a lista de letras erradas e verifica se o jogador perdeu
    letrasErradas++;
    document.querySelector(".wrong-guesses").textContent += palpite + " ";
    if (letrasErradas === 6) {
      document.querySelector('.word-display').textContent = palavraParaAdivinhar
      document.querySelector('.display-end-game').textContent = "Você perdeu!"
      $('#modal-resultado').modal('show');
    }
  }
};
form.addEventListener("submit", handleSubmit);
submitButton.addEventListener("click", handleSubmit)
document.querySelector('.botao-reset').addEventListener("click", function restartGame(){
  geradorPalavra()
})