const rockBtn = document.getElementById('rock')
const paperBtn = document.getElementById('paper')
const scissorBtn = document.getElementById('scissor')
const startBtn = document.getElementById('start')
let playerChoice = ''
const choice = ['rock', 'paper', 'paper']

function randomComputerChoice(){
    // const sel = ['rock', 'paper', 'scissor']
    const randomChoice = Math.floor(Math.random() * choice.length)
    return choice[randomIndex]
}

function rockSel(){
    playerChoice = 'rock'
    console.log("you choose rock")
}


function paperSel(){
    playerChoice = 'rock'
    console.log("you choose paper")
}

function scissorSel(){
    playerChoice = 'rock'
    console.log("you choose scissor")
}

function startGame(){
    console.log("clicked")
}

function playRound(){
    const playerSelection = playerSelection
    const computerSelection = ComputerChoice() 
}
