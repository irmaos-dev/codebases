// Selecionar/Criar as variáveis do Jokenpo
/*
  document.getElementById('idDesejado') -> retorna UM elemento, correspondente

  document.getElementsByClassName('classeDesejada') -> retorna UMA LISTA com os elementos pertencentes a classe
 */

let resultadoUsuario = 0
let resultadoComputador = 0
const userScore_span = document.getElementById('userScore')
const computerScore_span = document.getElementById('compScore')
const paperButton_img = document.getElementById('paperButton') 
const rockButton_img = document.getElementById('rockButton') 
const scissorsButton_img = document.getElementById('scissorsButton')
const result_p = document.getElementById('result')
const scores_p = document.getElementById('scores')

/* Dar um feedback textual para a jogada do usuário e do computador | FEITO */

// Modificar a cor do placar de acordo com o placar
// verde se o usuário está ganhando
// vermelho se o usuário está perdendo
// branco se estiver empatado
// lembre-se das classes css green-glow e red-glow
// FEITO

/* 
Dar feedback visual - nas bordas dos botões -
se o usuário ganhou; venceu ou perdeu
lembre-se das classes css green-glow e red-glow
lembre-se também que a jogadaUsario tem como valor (paper, rock, scissors)
e os botões tem como id (paperButton, rockButton e scissorsButton)
talvez seja necessário fazer um getElementById para adicionar classe
*/

// função para traduzir as jogadas
function traduzirJogadas(jogada) {
  switch(jogada){
    case "paper":
      return "papel";
    case "rock":
      return "pedra";
    case "scissors":
      return "tesoura";
  }
}

function quemEstaGanhando() {
  // usuário na frente
  if(resultadoUsuario > resultadoComputador){
    scores_p.classList = ""
    scores_p.classList.add('green-glow')
    scores_p.style.color = "#26ff63"
  } else if ( resultadoUsuario < resultadoComputador) {
    // perdendo
    scores_p.classList = ""
    scores_p.classList.add('red-glow')
    scores_p.style.color = "#fc121b";
  } else {
    // empatado
    scores_p.classList = ""
    scores_p.style.color = "#ffffff";
  }
}


// função responsável por fazer o jogo de jokenpo
function jokenpo(jogadaUsuario) {

  // Capturando botão clicado:
  let clickedButton = document.getElementById( `${jogadaUsuario}Button`);

  // gerando uma jogada aleatória do computador
  jogadasPossiveisComputador = ["paper", "rock", "scissors"]
  n = (Math.floor(Math.random() * 3))
  jogadaComputador = jogadasPossiveisComputador[n]
  
  console.log(jogadaUsuario + jogadaComputador)
  switch(jogadaUsuario + jogadaComputador){
      // vitória do usuário: paperrock; rockscissors; scissorspaper
      case "paperrock":
      case "rockscissors":
      case "scissorspaper":
        resultadoUsuario++
        userScore_span.innerHTML = resultadoUsuario
        quemEstaGanhando()
        clickedButton.classList.add('green-glow');
        setTimeout(
          () => {clickedButton.classList.remove('green-glow')}
          , 300);
        jogadaUsuario = traduzirJogadas(jogadaUsuario)
        jogadaComputador = traduzirJogadas(jogadaComputador)
        result_p.innerText = `O usuário jogou ${jogadaUsuario} e o computador jogou ${jogadaComputador}, vitória do usuário`
        break;
      // derrota do usuário: rockpaper, scissorsrock, paperscissors
      case "rockpaper":
      case "scissorsrock":
      case "paperscissors":
        resultadoComputador++
        computerScore_span.innerText = resultadoComputador
        quemEstaGanhando()
        clickedButton.classList.add('red-glow');
        setTimeout(
          () => {clickedButton.classList.remove('red-glow')}
          , 300);
        jogadaUsuario = traduzirJogadas(jogadaUsuario)
        jogadaComputador = traduzirJogadas(jogadaComputador)
        result_p.innerText = `O usuário jogou ${jogadaUsuario} e o computador jogou ${jogadaComputador}, vitória do computador`
        break;
      // empates
      case "rockrock":
      case "scissorsscissors":
      case "paperpaper":
        jogadaUsuario = traduzirJogadas(jogadaUsuario)
        jogadaComputador = traduzirJogadas(jogadaComputador)
        result_p.innerText = `O usuário jogou ${jogadaUsuario} e o computador jogou ${jogadaComputador}, portanto empate`;
        break;
      default:
        alert("aconteceu algum erro")
  }
}

// event listener !
// adiciono uma função a ser executada se ocorrer um evento que eu determinar no elemento HTML.

function principal(){
  paperButton_img.addEventListener("click", ()=> jokenpo("paper"));
  rockButton_img.addEventListener("click", ()=> jokenpo("rock"));
  scissorsButton_img.addEventListener("click", ()=> jokenpo("scissors"));
}
 /**
 * @param {paper, rock, scissors} jogado 
 * @param {1, 0, -1} resultado 
 */
function destaqueBotao(jogado, resultado){
  
  // Capturo o botão clicado...
  const botaoClicado = document.getElementById(jogado + 'Button');
  
  if(resultado == 1){
    botaoClicado.classList.add("green-glow");
    // setTimeout(() => {
    //   botaoClicado.classList.remove("green-glow")
    // }, 500);
  } else if(resultado == -1){
    botaoClicado.classList.add("red-glow");
    // setTimeout(() => {
    //   botaoClicado.classList.remove("red-glow")
    // }, 500);
  }
}

principal()






