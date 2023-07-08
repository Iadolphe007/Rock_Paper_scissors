function getComputerChoice(){
    const sel = ["Rock", "Scissors", "Paper"]
    const randomIndex = Math.floor(Math.random() * sel.length)
    return sel[randomIndex]
}

console.log(getComputerChoice())


function playRound(playerSelection, computerSelection){

    const playerChoice = playerSelection.toLowerCase()
    const computerChoice = computerSelection.toLowerCase()
    
    if (playerChoice === computerChoice)
    {
        return ("It's a tie")
    } else if(
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice=== "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
        ){
            return(`You win!${playerSelection} beats ${computerSelection}`);

    } else{
        return (`You Lose, ${computerSelection} beats ${playerSelection}`)
    }
}

function game(){
    let playerScore = 0
    let computerScore = 0

    for(let i = 0; i < 5; i++){
        const playerSelection = prompt("Pick your choice in (Rock/Paper/Scissors):");
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);

        console.log(result);
        // if (!playerSelection){
        //     break
        //     return ("No choice provided")
        // }

        if (result.includes('win')) {
            playerScore++
        } else if (result.includes('lose')) {
            computeScore++
        }
    }
    if (playerScore > computerScore) {
        console.log("Congratulations! You won the game!");   
    } else if(playerScore < computerScore){
        console.log("Sorry! You lost the game.");
    } else if(computerScore == playerScore){
        console.log("it's a tie")
    }
}
game()