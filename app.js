const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('my-choice')
const resultDisplay = document.getElementById('winner')
const possibleChoices = document.querySelectorAll('button')
let userChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
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