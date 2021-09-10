const possibleSelections = ['rock', 'paper', 'scissors']

function computerPlay() {
    return possibleSelections[Math.floor(Math.random() * possibleSelections.length)]
}

function playerPlay() {
    let playerPick = prompt('What is your play? Rock, paper or scissors?').toLowerCase()
    while (playerPick !== 'rock' && playerPick !== 'paper' && playerPick !== 'scissors') {
        playerPick = prompt(`${playerPick} is not a valid option. Choose again.`).toLowerCase()
    }
    return playerPick
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

alert("You are going to play 5 rounds of rock, paper, scissors agaisn't the computer. Are you ready?");
game();