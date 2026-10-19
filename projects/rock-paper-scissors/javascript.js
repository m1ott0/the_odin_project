// random number function
function getComputerChoice(n) {
   return Math.floor(Math.random() * n)
}
let username = prompt("Type your username:")
let start = prompt("Wanna start the game?(y/n)")
if (start === "y") {
let humanScore = 0
let botScore = 0
// the hole game
for (let i = 0; i < 5; i++ ){
let initialUserInput = prompt("Rock, Paper or Scissors? Choose and type one!")
let userInput = initialUserInput.toUpperCase()
let botInput = getComputerChoice(3)
if (botInput === 0) {
    botInput = "scissors"
} else if (botInput === 1) {
    botInput = "rock"
} else {
    botInput = "paper"
}
let stats;
if (userInput === "ROCK" && botInput === "scissors" ||  userInput === "PAPER" && botInput === "rock" || userInput === "SCISSORS" && botInput === "paper") { 
    stats = 1
    console.log("Round Result: Congratulations, you Win! + 1 point(s) for: " + username) 
} else if (userInput === "ROCK" && botInput === "rock" ||  userInput === "PAPER" && botInput === "paper" || userInput === "SCISSORS" && botInput === "scissors") {
   stats  = 0
    console.log("Round Result: Thats a tie! + 0 points for both")
} else if (userInput === "ROCK" && botInput === "paper" ||  userInput === "PAPER" && botInput === "scissors" || userInput === "SCISSORS" && botInput === "rock") {
    console.log("Round Result: You lose! +1 point(s) for: Bot")
   stats = 2
} else {
    console.log("Round Result: Invalid Answer, no Points!")
}
if (stats === 1) {
    humanScore++
} else if (stats === 2) {
    botScore++
}
}
// final score of the game:
console.log("Good Game! Thats your final score:")
console.log(humanScore)
console.log("And thats the Bot’s final score:")
console.log(botScore)
if (humanScore > botScore) {
    console.log("Final Result: Congratulations, you Win the Game!")
} else if (humanScore === botScore) {
    console.log("Final Result: Thats a tie, there is no Winner!")
} else {
    console.log("Final Result: You lose the game!")
}
} else if (start === "n") {
    console.log("Bye bye then!")
} else {
    console.log("Invalid answer!")
}