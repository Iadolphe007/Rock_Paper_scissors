const DEFAULT_CHOICE = 'rock'
const currentChoice = DEFAULT_CHOICE

const rockBtn = document.getElementById('rock')
const paperBtn = document.getElementById('paper')
const scissorBtn = document.getElementById('scissor')
const startBtn = document.getElementById('start')
const comSec = document.getElementById('comment')
const choice = ['rock', 'paper', 'scissors']
let playerSelection = ''


function playerChoice(newChoice){
    activateButton(newChoice)
    currentChoice = newChoice 
}

function randomComputerChoice(){
    const randomChoice = Math.floor(Math.random() * choice.length)
    return choice[randomChoice]
}

rockBtn.onclick = () => PlayerChoice('rock')
paperBtn.onclick = () => PlayerChoice('paper')
scissorBtn.onclick = () => PlayerChoice('scissors')
startBtn.onclick = () => clear()

function activateButton(newChoice){
    if(currentChoice === 'rock') {
        rockBtn.classList.remove('active')
      } else if(currentChoice === 'paper') {
        paperBtn.classList.remove('active')
      } else if(currentChoice === 'scissor') {
        scissorBtn.classList.remove('active')
      } else if(currentChoice === 'start'){
        startBtn.classList.remove('active')
      }
    
      if(newChoice === 'rock') {
        rockBtn.classList.add('active')
      } else if(newChoice === 'paper') {
        paperBtn.classList.add('active')
      } else if(newChoice === 'scissor') {
        scissorBtn.classList.add('active')
      } else if(newChoice === 'start'){
        startBtn.classList.remove('active')
      }
}

function playRound(playerSelection, computerSelection){
    // const playerSelection = playerSelection
    // const computerSelection = ComputerChoice()

    if (playerSelection === computerSelection){
        comSec.innerHTML = `Draw round ${playerSelection} and ${computerSelection}`
        return (`Draw round ${playerSelection} and ${computerSelection}`)
    }

    if(
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ){
        comSec.innerHTML = `You win!${playerSelection} beats ${computerSelection}`
        return (`You win!${playerSelection} beats ${computerSelection}`)
    } else{
        comSec.innerHTML = `You Lose, ${computerSelection} beats ${playerSelection}`
        return (`You Lose, ${computerSelection} beats ${playerSelection}`)
    }
}

function startGame(){
    let playerScore = 0
    let computerScore = 0
    let draw = 0
    

    for (i = 0; i < 3; i++){
        const computerSelection = randomComputerChoice()
        const playerSelection = PlayerChoice()
        const result = playRound(playerSelection, computerSelection)

        if (result.includes('win')) {
            playerScore++

        } else if (result.includes('lose')) {
            computerScore++
        } else if(result.includes('Draw')){
            draw++
        }
    }

    if (playerScore > computerScore) {
        console.log("Congratulations! You won the game!")  
    } else if(playerScore < computerScore){
        console.log("Sorry! You lost the game.");
    } else if (draw > (playerScore && computer)){
        console.log("it's Draw")
    } 


}

function clear(){
    console.log("clicked")
}

startGame()