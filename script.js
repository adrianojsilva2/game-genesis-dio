let order = [];
let clickedOrder = [];
let score = 0;

//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

// ordem aletoria das cores
let shuffleOrder = () =>{
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);        
    }
}

// acende a proxima cor
let lightColor = (element, number) =>{
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

// checa se os botoes cliclados sao os mesmos da ordem gerada no jogo
let checkOrder = () => {
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel();        
    }
}

//funcao para o clique do usuario
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);   
}

//funcao que retorna a cor
let createColorElement = (color) => {
    if(color == 0){
        return green;
    }else if(color == 1){
        return red; 
    }else if(color == 2){
        return yellow;
    } else if (color == 3){
        return blue;
    }
}

//funcao para o proximo nivel do jogo
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//funcao para o game over
let gameOver = ()=>{
    alert(`Pontuacao: ${score}\nVocê perdeu o jogo!\nClique em ok para iniciar o jogo`);
    order = [];
    clickedOrder = [];

    playGame();
}

// funcao para iniciar o jogo
let playGame = () => {
    alert('Bem vindo ao Gênesis! Iniciando novo jogo!');
    score = 0;

    nextLevel();
}

// green.addEventListener('click', click(0));
// red.addEventListener('click', click(1));
// yellow.addEventListener('click', click(2));
// blue.addEventListener('click', click(3));

//eventos de clique para as cores
green.onClick = () => click(0);
red.onClick = () => click(1);
yellow.onClick = () => click(2);
blue.onClick = () => click(3);

//inicia o jogo
playGame();