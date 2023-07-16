const rockBtn = document.getElementById('rock')
const paperBtn = document.getElementById('paper')
const scissorBtn = document.getElementById('scissor')
const startBtn = document.getElementById('start')
const resultDiv = document.getElementById('comment')
const pScore = document.getElementById('p-score')
const cScore = document.getElementById('c-score')


rockBtn.addEventListener('click',playerChoice)
paperBtn.addEventListener('click',playerChoice)
scissorBtn.addEventListener('click', playerChoice)


let computerScore = 0
let playerScore = 0
let round = 0
const choice = ['rock', 'paper', 'scissors']


function randomComputerChoice(){
    const randomChoice = Math.floor(Math.random() * choice.length)
    return choice[randomChoice]
}


function playRound(playerSelection, computerSelection){
    if(
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ){
        playerScore++
        round++
        pScore.textContent = playerScore
        resultDiv.textContent = 'you Win this Round!' + ' ' +  `${playerSelection}` + 'Beats' + `${computerSelection}` 
        
    } else if((computerSelection === 'rock' && playerSelection === 'sissors') ||
    (computerSelection === 'paper' && playerSelection === 'rock') ||
    (computerSelection === 'sissors' && playerSelection === 'paper')){
        computerScore++
        round++
        cScore.textContent = computerScore
        resultDiv.text = 'you loose this Round' + ' ' + `${computerSelection}` + 'Beats' `${playerSelection}`
    } else{
        round++
        resultDiv.textContent = 'This is a Tie Round' + `${playerScore}` + 'and' + `${computerSelection}`
    }
    winner()
}


const playResult = {
    computer: ['Sorry! You lost the game.', 'red'],
    player: ['Congratulations! You won the game!!!', 'Green'],
    tie: ['it\'s a tie Game', 'blue']
}


function winner(){
    if (computerScore === 5 || playerScore === 5){
        if(computerScore === playerScore){
            updateWinner('tie')
        }else{
            var win = `${(playerScore > computerScore) ? 'player' : 'computer'}`
            updateWinner(win);
        }
    }
}


function updateWinner(winner){
    resultDiv.textContent = playResult[winner][0]
    resultDiv.textContent = playResult[winner][1]
    rockBtn.removeEventListener('click', playerChoice)
    paperBtn.removeEventListener('click', playerChoice)
    scissorBtn.removeEventListener('click', playerChoice)
}


function playerChoice(e){
    let playerSelection = (e.target.id)
    playRound(playerSelection, randomComputerChoice())
}


function startGame(){
    window.location.reload();
}
