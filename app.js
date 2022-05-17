const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('my-choice')
const resultDisplay = document.getElementById('winner')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let winner

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getWinner()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1
    
    if (randomNumber === 1) {
        computerChoice = "Rock"
    }
    if (randomNumber === 2) {
        computerChoice = "Scissors"
    }
    if (randomNumber === 3) {
        computerChoice = "Paper"
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getWinner(){
    if (computerChoice === userChoice){
        result = "It is a tie!"
    }
    if (computerChoice === 'Rock' && userChoice === 'Paper'){
        result = "You Win!"
    }
    if (computerChoice === 'Rock' && userChoice === 'Scissors'){
        result = "You Lose!"
    }
    if (computerChoice === 'Paper' && userChoice === 'Rock'){
        result = "You Lose!"
    }
    if (computerChoice === 'Paper' && userChoice === 'Scissors'){
        result = "You Win!"
    }
    if (computerChoice === 'Scissors' && userChoice === 'Paper'){
        result = "You Lose!"
    }
    if (computerChoice === 'Scissors' && userChoice === 'Rock'){
        result = "You Win!"
    }
    resultDisplay.innerHTML = result
}