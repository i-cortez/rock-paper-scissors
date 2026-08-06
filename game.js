// game.js
// By: i-cortez
// Date: 09-23-2025
// Description: This is the main game file for the game. It will handle the 
// game loop and game state.

let round = 1;
let playerScore = 0;
let computerScore = 0;

// cashed UI refs
const ui = {};
function cacheUI() {
    // game info
    ui.roundInfo = document.querySelector(".game-info > h3");
    ui.playerScore = document.querySelector(".game-info > #player-score");
    ui.computerScore = document.querySelector(".game-info > #computer-score");

    // round info
    ui.selection = document.querySelector(".round-info > #selection");
    ui.result = document.querySelector(".round-info > #result");

    // game buttons
    ui.rockBtn = document.querySelector("#rock");
    ui.paperBtn = document.querySelector("#paper");
    ui.scissorsBtn = document.querySelector("#scissors");
}

function refreshGameInfo() {
    ui.roundInfo.textContent = "Round: " + round;
    ui.playerScore.textContent = "Player Score: " + playerScore;
    ui.computerScore.textContent = "Computer Score: " + computerScore;
}

function endGame() {
    const winner = (playerScore > computerScore)
        ? "You win the game!"
        : "Computer wins the game!";
    ui.result.textContent = winner;
    [ui.rockBtn, ui.paperBtn, ui.scissorsBtn].forEach(btn => btn.disabled = true);
}

function initUI() {
    cacheUI();

    // init game info
    refreshGameInfo();
    ui.selection.textContent = "";
    ui.result.textContent = "";

    // event listeners to play game
    ui.rockBtn.addEventListener("click", () => handleSelection(1));
    ui.paperBtn.addEventListener("click", () => handleSelection(2));
    ui.scissorsBtn.addEventListener("click", () => handleSelection(3));
}

function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1;
}

function playRound(playerChoice) {
    let computerChoice = getComputerChoice();

    // 0 - tie, 1 - player wins, 2 - computer wins
    // check for tie
    if(playerChoice === computerChoice) {
        return {outcome: 0, computerChoice};
    }

    // player chooses rock
    if (playerChoice === 1) {
        return {outcome: (computerChoice === 2? 2 : 1), computerChoice};
    }

    // Player chooses paper
    if (playerChoice === 2) {
        return {outcome: (computerChoice === 3? 2 : 1), computerChoice};
    }

    // Player chooses scissors
    if (playerChoice === 3) {
        return {outcome: (computerChoice === 1? 2 : 1), computerChoice};
    }
}

function handleSelection(playerChoice) {
    const options = ["Rock", "Paper", "Scissors"];
    const {outcome, computerChoice} = playRound(playerChoice);

    ui.selection.textContent = `You: ${options[playerChoice - 1]} - Computer: ${options[computerChoice - 1]}`;
    if (outcome === 1) {
        ++playerScore;
        ui.result.textContent = "You win this round!";
    }
    else if (outcome === 2) {
        ++computerScore;
        ui.result.textContent = "Computer wins this round!";
    }
    else {
        ui.result.textContent = "It's a tie!";
    }

    refreshGameInfo();
    if (playerScore >= 3 || computerScore >= 3) {
        endGame();
    }
    else {
        ++round;
    }
}

initUI();
