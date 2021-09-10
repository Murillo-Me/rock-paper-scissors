const possibleSelections = ['rock', 'paper', 'scissors']

function computerPlay() {
    return possibleSelections[Math.floor(Math.random() * possibleSelections.length)]
}

function playerPlay() {
    return prompt('What is your play? Rock, paper or scissors?').toLowerCase()
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a draw! You have both picked ${playerSelection}`
    }
    else if (possibleSelections.indexOf(playerSelection) - possibleSelections.indexOf(computerSelection) === 1 ||
            possibleSelections.indexOf(playerSelection) - possibleSelections.indexOf(computerSelection) === -2) {
        return `You win! ${playerSelection} beats ${computerSelection}.`
    }
    else if (possibleSelections.indexOf(computerSelection) - possibleSelections.indexOf(playerSelection) === 1 ||
    possibleSelections.indexOf(computerSelection) - possibleSelections.indexOf(playerSelection) === -2) {
        return `You lose! ${computerSelection} beats ${playerSelection}.`
    }
}

alert(playRound(playerPlay(), computerPlay()));