let playerChoice;
let computerChoice;

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

const playerSelection = () => {
    let player = prompt("Enter rock, paper or scissors")

    return player.toUpperCase()
}



const playRound = (player, computer) => {
    if(playerChoice === "ROCK"){
        if(computerChoice === "Rock"){
            return "Tie"
        } else if(computerChoice === "Scissors"){
            return "You Win, Rock beats Scissors"
        } else if(computerChoice === "Paper"){
            return "You Lose, Paper beats Rock"
        }
    }
    if(playerChoice === "PAPER"){
        if(computerChoice === "Rock"){
            return "You Win, Paper beast Rock"
        } else if(computerChoice === "Scissors"){
            return "You lose, Scissors beats Paper"
        } else if(computerChoice === "Paper"){
            return "Tie"
        }
    }
    if(playerChoice === "SCISSORS"){
        if(computerChoice === "Rock"){
            return "You lose, Rock beats Scissors"
        } else if(computerChoice === "Scissors"){
            return "Tie"
        } else if(computerChoice === "Paper"){
            return "You Win, Scissors beats Paper"
        }
    }

}

const game = () => {
    for (i=0; i<5; i++){
        playerChoice = playerSelection()
        computerChoice = getComputerChoice()
        console.log(playRound(playerChoice, computerChoice))
    }
}

game()