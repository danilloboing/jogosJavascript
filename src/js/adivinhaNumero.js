const botaoToggle = document.querySelector('.botao-toggle');
const listaInstrucoes = document.querySelector('.lista-instrucoes');

botaoToggle.addEventListener('click', () => {
  listaInstrucoes.style.display = listaInstrucoes.style.display === 'none' ? 'block' : 'none';
});

//jogo
let numeroAleatorio 
let numeroTentativas

async function geradorNumero() {
  numeroAleatorio = Math.floor(Math.random() * 100) + 1;
  numeroTentativas = 1
  document.querySelector('.tentativas').textContent = ""
  document.querySelector('.numero-secreto').textContent = "X"
  document.querySelector('.saidas').textContent = ""
  jogoEmAndamento = true


  return numeroAleatorio
}

let jogoEmAndamento = true
const form = document.querySelector(".form");
const botaoSubmit = document.querySelector(".botao-jogar")
const botaoReiniciar = document.querySelector(".botao-reset")

const submitForm = function (event) {
  event.preventDefault();
  
  const palpiteInput = document.querySelector('.palpite-input')
  const palpite = palpiteInput.value
  palpiteInput.value = ""
  
  if (!jogoEmAndamento) {
    return;
  }
  
  if (palpite == numeroAleatorio) {
    //COLOCAR MENSAGEM DE VITORIA
    document.querySelector('.saidas').textContent = "Parabéns! Você acertou!"
    document.querySelector('.numero-secreto').textContent = numeroAleatorio
    jogoEmAndamento = false
    return
  } else if (palpite > numeroAleatorio) {
    document.querySelector('.saidas').textContent = "Tente um número menor"
    
  } else {
    document.querySelector('.saidas').textContent = "Tente um número maior"
  }
  
  if (numeroTentativas === 6) {
    document.querySelector('.saidas').textContent = "Você perdeu!"
    document.querySelector('.numero-secreto').textContent = numeroAleatorio
    jogoEmAndamento = false
  };
  document.querySelector('.tentativas').textContent = numeroTentativas.toString()
  numeroTentativas++
}

form.addEventListener("submit", submitForm)
botaoSubmit.addEventListener("click", submitForm)
//botaoReiniciar.addEventListener("click", async () => { await geradorNumero(); });
botaoReiniciar.addEventListener("click", geradorNumero)

geradorNumero()