let playerChoice;
let computerChoice;
let playerScore = 0;
let computerScore = 0;

const resultDiv = document.getElementById("result");
const gameScore = document.getElementById("gameScore");

const rock = document.getElementById("rock");
rock.addEventListener('click', () => {
    playerChoice = "ROCK"
    computerChoice = getComputerChoice()
    checkWinner()
})

const paper = document.getElementById('paper');
paper.addEventListener('click', () => {
    playerChoice = "PAPER"
    computerChoice = getComputerChoice()
    checkWinner()
})

const scissors = document.getElementById('scissors');
scissors.addEventListener('click', () => {
    checkWinner()
    playerChoice = "SCISSORS"
    computerChoice = getComputerChoice()
    
})

const checkWinner = () => {
    resultDiv.textContent= playRound(playerChoice, computerChoice)
    gameScore.textContent = playerScore + " : " + computerScore
    if (playerScore === 5){
        console.log("You Win!!")
        playerScore = 0;
        computerScore = 0
    }
    if(computerScore === 5){
        console.log("You Lose!!")
        playerScore = 0;
        computerScore = 0
    }
    
}

const getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3)
    if(choice === 0){
        return "Rock"
    } else if (choice === 1){
        return "Paper"
    } else {
        return "Scissors"
    }
}


const playRound = (player, computer) => {
    let resultText = ""
    if(playerChoice === "ROCK"){
        if(computerChoice === "Rock"){
            resultText = "Tie"
        } else if(computerChoice === "Scissors"){
            playerScore += 1;
            resultText = "You Win, Rock beats Scissors"
        } else if(computerChoice === "Paper"){
            computerScore += 1;
            resultText =  "You Lose, Paper beats Rock"
        }
    }
    if(playerChoice === "PAPER"){
        if(computerChoice === "Rock"){
            playerScore += 1
            resultText =  "You Win, Paper beast Rock"
            
        } else if(computerChoice === "Scissors"){
            computerScore += 1
            resultText =  "You lose, Scissors beats Paper"
           
        } else if(computerChoice === "Paper"){
            resultText =  "Tie"
        }
    }
    if(playerChoice === "SCISSORS"){
        if(computerChoice === "Rock"){
            computerScore += 1
            resultText =  "You lose, Rock beats Scissors"
            
        } else if(computerChoice === "Scissors"){
            resultText =  "Tie"
        } else if(computerChoice === "Paper"){
            playerScore += 1
            resultText =  "You Win, Scissors beats Paper"
        }
    }
    return resultText
}