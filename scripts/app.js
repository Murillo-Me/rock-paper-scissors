const possibleSelections = ['rock', 'paper', 'scissors']

function computerPlay() {
    return possibleSelections[Math.floor(Math.random() * possibleSelections.length)]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return {result: `It's a draw! You have both picked ${playerSelection}`, winner: 'draw'}
    }
    else if (possibleSelections.indexOf(playerSelection) - possibleSelections.indexOf(computerSelection) === 1 ||
            possibleSelections.indexOf(playerSelection) - possibleSelections.indexOf(computerSelection) === -2) {
        return {result: `You win! ${playerSelection} beats ${computerSelection}.`, winner: 'player'}
    }
    else if (possibleSelections.indexOf(computerSelection) - possibleSelections.indexOf(playerSelection) === 1 ||
    possibleSelections.indexOf(computerSelection) - possibleSelections.indexOf(playerSelection) === -2) {
        return {result: `You lose! The computer picked ${computerSelection}.\nUnfortunately, it beats ${playerSelection}.`, winner: 'computer'}
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

function countScore(winner, playerScore, computerScore) {

        if (winner !== 'draw') {
            winner === 'player' ? playerScore++ : computerScore++
        }

        // if (playerScore >= 3) {
        //     alert(`You win! You have won ${playerScore} rounds and lost ${computerScore}.`)
        //     return
        // }
        // else if (computerScore >= 3) {
        //     alert(`You lose! You have lost ${computerScore} rounds and won ${playerScore}.`)
        //     return
        // }
}

const announcements = document.querySelector('.instructions:first-of-type')
const result = document.querySelector('.result')
console.log(announcements)

announcements.textContent = "You are going to play 5 rounds of rock, paper, scissors agaisn't the computer."
announcements.innerHTML += '<br>What is your play? Rock, paper or scissors?<br><br>'

const buttons = document.querySelectorAll('.user-input')

const computerScoreElement = document.querySelector('#computer-score')
let computerScore = 0

const playerScoreElement = document.querySelector('#player-score')
let playerScore = 0

buttons.forEach(btn => {btn.addEventListener('click', (e) => {
    let roundResults = playRound(e.currentTarget.getAttribute('id'),computerPlay())
    result.textContent = roundResults.result
    console.log(roundResults)

    if (roundResults.winner==='draw') return;
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
})})



// buttons.forEach(btn => {btn.addEventListener('click', (e) => {
//     playerPick = e.currentTarget
//     console.log(playerPick)
// })})

// setTimeout(() => {
//     announcements.textContent = "You are going to play 5 rounds of rock, paper, scissors agaisn't the computer."
//     console.log(playerPlay(announcements))
// }, 2000);

// alert("You are going to play 5 rounds of rock, paper, scissors agaisn't the computer.");
// game();