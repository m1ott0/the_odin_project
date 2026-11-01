// game variables
let playerScore = 0;
let playerChoice = 0;
let computerScore = 0;
let computerChoice = 0;
let username;
// game functions
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    return randomNumber;
}
function restart() {
    roundResult.textContent = 'Waiting for your choice...';
    playerScore = 0
    computerScore = 0
    computerNumber.textContent = computerScore;
    playerNumber.textContent = playerScore;
}
// username question
const inputAnswer = document.querySelector('#username')
const sumbitButton = document.querySelector('#submit')
let playerName = document.querySelector('#playerName')
sumbitButton.addEventListener('click', function(event) {
    event.preventDefault()
    username = inputAnswer.value
    if (username === "") {
    playerName.textContent = 'PLAYER'
    } else { 
    playerName.textContent = username
    }
})
// the hole game
const playerNumber = document.querySelector('#playerScore');
const computerNumber = document.querySelector('#computerScore');
const roundResult = document.querySelector('#roundResult');
const botoes = document.querySelectorAll('.r-buttons');
const restartButton = document.querySelector('#restart');
botoes.forEach(function (botao){
    botao.addEventListener('click', function(event){
        if (event.target.id === 'paper') {
            playerChoice = 0;
        } else if (event.target.id === 'rock') {
            playerChoice = 1;
        } else if (event.target.id === 'scissors') {
            playerChoice = 2;
        };
        computerChoice = getComputerChoice();
        if (playerChoice === 0 && computerChoice === 0 || playerChoice === 1 && computerChoice === 1 || playerChoice === 2 && computerChoice === 2) {
            roundResult.textContent = "It's a tie! Try again!";
        } else if (playerChoice === 0 && computerChoice === 1 || playerChoice === 1 && computerChoice === 2 || playerChoice === 2 && computerChoice === 0) {
            playerScore++;
            roundResult.innerHTML = 'You won this round!';
        } else if (playerChoice === 0 && computerChoice === 2 || playerChoice === 1 && computerChoice === 0 || playerChoice === 2 && computerChoice === 1) {
            computerScore++;
            roundResult.textContent = "The computer won this round!";
            
        }
        computerNumber.textContent = computerScore;
        playerNumber.textContent = playerScore;
    });
});
// restart game
restartButton.addEventListener('click', restart);