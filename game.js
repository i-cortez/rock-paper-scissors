// game.js
// By: i-cortez
// Date: 03-20-2025
// Description: This is the main game file for the game. It will handle the 
// game loop and game state.

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1;
}

function getPlayerChoice() {
    let playerChoice;
    do {
        playerChoice = +prompt('Enter 1 - Rock, 2 - Paper, 3 - Scissors:');
        switch (playerChoice) {
            case 1:
            case 2:
            case 3:
                return playerChoice;
            default:
                console.log('Invalid choice. Please choose 1, 2, or 3.');
        }
    }
    while (playerChoice !== 1 || playerChoice !== 2 || playerChoice !== 3);
}

function playRound() {
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();
    let options = ["Rock", "Paper", "Scissors"];
    console.log(`Player chose: ${options[playerChoice - 1]}`);
    console.log(`Computer chose: ${options[computerChoice - 1]}`);
    // Check for tie
    if(playerChoice === computerChoice) {
        console.log("It's a tie!");
    }

    // Player chooses rock
    else if(playerChoice === 1) {
        // Paper beats rock
        if (computerChoice === 2) {
            console.log("Paper beats rock! Computer wins!");
            ++computerScore;
        }
        // Rock beats scissors
        else {
            console.log("Rock beats scissors! Player wins!");
            ++playerScore;
        }
    }

    // Player chooses paper
    else if(playerChoice === 2) {
        // Scissors beats paper
        if (computerChoice === 3) {
            console.log("Scissors beats paper! Computer wins!");
            ++computerScore;
        }
        // Paper beats rock
        else {
            console.log("Paper beats rock! Player wins!");
            ++playerScore;
        }
    }

    // Player chooses scissors
    else if(playerChoice === 3) {
        // Rock beats scissors
        if (computerChoice === 1) {
            console.log("Rock beats scissors! Computer wins!");
            ++computerScore;
        }
        // Scissors beats paper
        else {
            console.log("Scissors beats paper! Player wins!");
            ++playerScore;
        }
    }
}

function playGame() {
    console.log("Welcome to Rock, Paper, Scissors!");
    console.log("Best of 5 rounds wins the game!");
    for(let i = 0; i < 5; ++i) {
        console.log(`Round ${i + 1}`);
        console.log(`Player score: ${playerScore}`);
        console.log(`Computer score: ${computerScore}`);
        playRound();
    }
    if (playerScore > computerScore) {
        return "Player wins the game!";
    }
    else if (playerScore < computerScore) {
        return "Computer wins the game!";
    }
    else {
        return "It's a tie game!";
    }
}

let gameResult = playGame();
console.log("Game over!");
console.log(`Final score: Player - ${playerScore}, Computer - ${computerScore}`);
console.log(gameResult);
