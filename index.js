const arr = ["Rock", "Scissors", "Paper"]

function getComputerChoice(){
    const randomIndex = Math.floor(Math.random() * arr.length)
    return arr[randomIndex]
}

console.log(getComputerChoice())


function playRound(playerSelection, computerSelection){
    playerSelection = prompt("Rock, paper, Scissors").toLowerCase();
    computerSelection = getComputerChoice()
    let message = ""

    if(playerSelection === computerSelection){
        message = "tie"
    }

    if(
        (playerSelection === "Rock" && computerSelection === "scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
        ){
            message = "You win"

    }
    if(
        (computerSelection === "Rock" && playerSelection === "scissors") ||
        (computerSelection === "Paper" && playerSelection === "Rock") ||
        (computerSelection === "Scissors" && playerSelection === "Paper")
    ){
        message = "You Lose!"
    }

}

