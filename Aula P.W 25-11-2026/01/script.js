//Associa o elemento personagem ao JS
const personagem = document.getElementById('personagem');

// Obter o elemento pai do personagem 
const container = personagem.parentElement;

// Posição Inicial -> offsetLeft -> distância do personagem em relação a margem esquerda do container
let posX = personagem.offsetLeft;

// Largura do personagem -> offsetWidth -> largura em pixels
const LarguraPersonagem = personagem.offsetWidth

// Estabelecer os limites do container 
const larguraMax = 600;
const alturaMax = 400;
// Evento que será acionado à partir do momento que alguém apertar uma teclado no teclado
document.addEventListener("keydown", (elemento) => {

    if(elemento.key === "ArrowRight"){

        if(posX + LarguraPersonagem < larguraMax){
            posX += 3; //posX = posX + 10
        }

    } else if (elemento.key === "ArrowLeft"){
        if(posX >0){
            posX -= 3;
        }
    }
    
    personagem.style.left = posX + "px";
});