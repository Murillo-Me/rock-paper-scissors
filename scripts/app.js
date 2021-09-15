const possibleSelections = ['rock', 'paper', 'scissors']

function computerPlay() {
    return possibleSelections[Math.floor(Math.random() * possibleSelections.length)]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return {result: `It's a draw! You have both picked ${playerSelection}`, winner: 'draw', playerPick: playerSelection, 'computerPick': computerSelection}
    }
    else if (possibleSelections.indexOf(playerSelection) - possibleSelections.indexOf(computerSelection) === 1 ||
            possibleSelections.indexOf(playerSelection) - possibleSelections.indexOf(computerSelection) === -2) {
        return {result: `You win! ${playerSelection} beats ${computerSelection}.`, winner: 'player', playerPick: playerSelection, 'computerPick': computerSelection}
    }
    else if (possibleSelections.indexOf(computerSelection) - possibleSelections.indexOf(playerSelection) === 1 ||
    possibleSelections.indexOf(computerSelection) - possibleSelections.indexOf(playerSelection) === -2) {
        return {result: `You lose! The computer picked ${computerSelection}.\nUnfortunately, it beats ${playerSelection}.`, winner: 'computer', playerPick: playerSelection, 'computerPick': computerSelection}
    }
}

function game() {
    let playerScore = 0
    let computerScore = 0

    for (let i = 0 ; i < 5 ; i++){
        let roundData = playRound(playerPlay(), computerPlay());
        if (roundData.winner !== 'draw') {
            roundData.winner === 'player' ? playerScore++ : computerScore++
        }
        else {
            i--
        }
        alert(`${roundData.result} \n
        Scoreboard:
                    Player score: ${playerScore}
              Computer score: ${computerScore}`)

        if (playerScore >= 3) {
            alert(`You win! You have won ${playerScore} rounds and lost ${computerScore}.`)
            return
        }
        else if (computerScore >= 3) {
            alert(`You lose! You have lost ${computerScore} rounds and won ${playerScore}.`)
            return
        }
    }
}

function roulettePlay() {
    const iconElement = document.querySelector('#computer-play > i')
    rouletteIcons = ['far fa-hand-rock fa-5x', 'far fa-hand-paper fa-5x', 'far fa-hand-scissors fa-5x']
    let i = 0
    return setInterval(() => {
        iconElement.setAttribute('class', rouletteIcons[i])
        i++
        if (i === 3) {
            i = 0
        }
    }, 150)

}

let rouletteIntervalID = roulettePlay()

const computerScoreElement = document.querySelector('#computer-score')
let computerScore = 0

const playerScoreElement = document.querySelector('#player-score')
let playerScore = 0

let roundCounter = 1

const roundCounterElement = document.querySelector('h1.round-counter');
console.log(roundCounterElement)
const result = document.querySelector('.result')
const buttons = document.querySelectorAll('.user-input')

buttons.forEach(btn => {btn.addEventListener('click', (e) => {
    let roundResults = playRound(e.currentTarget.getAttribute('id'),computerPlay())
    result.textContent = roundResults.result
    result.style.opacity = '1'

    roundCounter++
    roundCounterElement.textContent = `Round ${roundCounter}`

    clearInterval(rouletteIntervalID)
    const iconElement = document.querySelector('#computer-play > i')
    iconElement.setAttribute('class', `far fa-hand-${roundResults.computerPick} fa-5x`)


    if (roundResults.winner==='draw') {
        setTimeout(() => {
            rouletteIntervalID = roulettePlay()
        }, 1500);
        return;
    }

    (roundResults.winner==='player') ? playerScore++ : computerScore++
    
    playerScoreElement.textContent = playerScore
    computerScoreElement.textContent = computerScore

    if (playerScore === 5) {
        alert("YOU HAVE WON! CONGRATULATIONS!")
        window.location.reload()
    }
    
    if (computerScore === 5) {
        alert("YOU HAVE LOST! TRY AGAIN NEXT TIME!")
        window.location.reload()
    }

    setTimeout(() => {
        rouletteIntervalID = roulettePlay()
    }, 1500);
})})