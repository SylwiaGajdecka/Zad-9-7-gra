var btnNewGame = document.getElementById('js-btnNewGame');
btnNewGame.addEventListener('click', newGame);

var gameState = 'notStarted',
    player = {
        name: '',
        score: 0
    },

    computer = {
        score: 0
    };

var newGameElement = document.getElementById('js-newGameElement'),
    pickElement = document.getElementById('js-playerPickElement'),
    resultElement = document.getElementById('js-resultTableElement'),
    figure = document.getElementById('js-figure');

function setGameElements() {
    switch(gameState) {
        case 'started':
            newGameElement.style.display = 'none';
            figure.style.display = 'none';
            pickElement.style.display = 'block';
            resultElement.style.display = 'block';
        break;
        case 'ended':
            btnNewGame.innerText = 'Play again';
        case 'notStarted':
        default:
            newGameElement.style.display = 'block';
            figure.style.display = 'block';
            pickElement.style.display = 'none';
            resultElement.style.display = 'none';
    }
}

setGameElements();

var playerName = document.getElementById('js-playerName'),
    playerScore = document.getElementById('js-playerScore'),
    computerScore = document.getElementById('js-computerScore'),
    playerScoreCircle = document.getElementById('js-playerScoreCircle'),
    computerScoreCircle = document.getElementById('js-computerScoreCircle');

function newGame(){
    player.name = prompt('Please enter Your name', 'imię gracza');
    if(player.name) {
        player.score = computer.score = 0;
        gameState = 'started';
        setGameElements();

        playerName.innerHTML = player.name; 
        setGamePoints(); //tego nie rozumiem, dlaczego tutaj to uruchamiamy?
    }
}

var playerPick_rock = document.getElementById('js-playerPick_rock');
var playerPick_paper = document.getElementById('js-playerPick_paper');
var playerPick_scissors = document.getElementById('js-playerPick_scissors');

playerPick_scissors.addEventListener('click', function(){ playerPick('scissors');}); //przy kliknięciu wywoła się funkcja, w środku której wywoła się funkcja playerPick???
playerPick_paper.addEventListener('click', function(){ playerPick('paper');});       //nie można tego zrobić od razu zamiast function() wpisać playerPick()?
playerPick_rock.addEventListener('click', function(){ playerPick('rock');});         // playerPick() zwraca napis w konsoli?

function playerPick(playerPick) { //tu tez sie pogubiłam
    console.log(playerPick);
}

function getComputerPick(){
    var possiblePicks = ['scissors', 'rock', 'paper'];
    return possiblePicks[Math.floor(Math.random()*3)];
}

var playerPickElement = document.getElementById('js-playerPick'),
    computerPickElement = document.getElementById('js-computerPick'),
    playerResultElement = document.getElementById('js-playerResult'),
    computerResultElement = document.getElementById('js-computerResult');

function playerPick(playerPick){
    var computerPick = getComputerPick();

    playerPickElement.innerHTML = playerPick;
    computerPickElement.innerHTML = computerPick;

    checkTheWinner(playerPick, computerPick);
}

function checkTheWinner(playerPick, computerPick){ //dlaczego tutaj przekazuje się parametry a do innych funkcji nie?
    playerResultElement.innerHTML = computerResultElement.innerHTML = '';  //dlaczego ta funkcja nie wyświetla wyników?

    var winnerIs = 'player';

    if (playerPick == computerPick){

        winnerIs = 'none';
        computerResultElement.innerHTML = "draw";
        playerResultElement.innerHTML = "draw"

    } else if ( (computerPick == 'scissors' && playerPick == 'paper') ||
                (computerPick == 'paper' && playerPick == 'rock') ||
                (computerPick == 'rock' && playerPick == 'scissors')){

        winnerIs = 'computer';
        }

    if (winnerIs == 'computer'){
        computerResultElement.innerHTML = "Win!";
        playerResultElement.innerHTML = "Loss...";
        computer.score++;
    } else if (winnerIs == 'player'){
        playerResultElement.innerHTML = "Win!";
        computerResultElement.innerHTML = "Loss...";
        player.score++;
    }

}

function setGamePoints(){
    playerScore.innerHTML = player.score;
    computerScore.innerHTML = computer.score;
}