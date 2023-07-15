// function getComputerChoice(){
//     const sel = ["Rock", "Scissors", "Paper"]
//     const randomIndex = Math.floor(Math.random() * sel.length)
//     return sel[randomIndex]
// }

// function playRound(playerSelection, computerSelection){
//     const validSelections = ['rock', 'paper', 'scissors'];
//     const playerChoice = playerSelection.toLowerCase()
//     const computerChoice = computerSelection.toLowerCase()
    
    
//     if (!playerSelection) {
//         return "Invalid input. Please enter a valid choice.";
//     } else if (!validSelections.includes(playerChoice)) {
//         return ("Invalid input. Please enter one of the valid choices: Rock, Paper, or Scissors.")
//     }

    
//     if (playerChoice === computerChoice)
//     {
//         return ("It's a tie")
//     } 

//     if (
//         (playerChoice === "rock" && computerChoice === "scissors") ||
//         (playerChoice === "paper" && computerChoice=== "rock") ||
//         (playerChoice === "scissors" && computerChoice === "paper")
//         ){
//         return(`You win!${playerSelection} beats ${computerSelection}`)

//     } else{
//         return (`You Lose, ${computerSelection} beats ${playerSelection}`)
//     }
// }

// function game(){
//     let playerScore = 0
//     let computerScore = 0
//     console.log(getComputerChoice())

//     for(let i = 0; i < 5; i++){
//         const playerSelection = prompt("Pick your choice in (Rock/Paper/Scissors):")
//         const computerSelection = getComputerChoice();
//         const result = playRound(playerSelection, computerSelection)

//         console.log(result);
//         if (result.includes('win')) {
//             playerScore++
//         } else if (result.includes('lose')) {
//             computerScore++
//         }
//             }
//     if (playerScore > computerScore) {
//         console.log("Congratulations! You won the game!")  
//     } else if(playerScore < computerScore){
//         console.log("Sorry! You lost the game.");
//     } 
//     else{
//         console.log("Oops! it's a tie")
//     }
// }
// game()