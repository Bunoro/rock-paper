let playerChoice;
let computerChoice;
var result = results();
const displayResult = document.getElementById("result")
const computerChoice = document.getElementById("computer")
const randomNumber = Math.round(Math.random() *(3))

//generate random number
function generatedComputerChoice() {
    if (randomNumber === 1) {
        return computerChosen = "rock";
    }else if (randomNumber === 2) {
        return computerChosen = "paper";
    }else if (randomNumber === 3) {
        return computerChosen = "scissors"
    }
}
//play outcome logic
function (result) {
    if (computerChoice === playerChoice) {
        return result = "It's A Draw"
    }else if (computerChoice === "rock" && playerChoice === "paper") {
        return result = "You Win"
    }else if (computerChoice === "rock" && playerChoice === "scissors") {
        return result = "You Lost"
    }else if (computerChoice === "scissors" && playerChoice === "paper") {
        return result = "You Lost"
    }else if (computerChoice === "paper" && playerChoice === "scissors") {
        return result = "You Win"
    }else if (computerChoice === "scissors" && playerChoice === "rock") {
        return result = "You Win"
    }else if (computerChoice === "rock" && playerChoice === "scissors") {
        return result = "You Lost"
    }
}