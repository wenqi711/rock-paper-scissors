function getComputerChoice() {

    let randomNumber = Math.random();

    if (randomNumber < 1/3) {
        return "rock";
    }
    else if (randomNumber > 2/3) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {

    if (computerChoice === humanChoice) {
        resultsContainer.textContent = `It's a tie!`;
    } 
    else if ((humanChoice === "rock" && computerChoice === "scissors")
    || (humanChoice === "scissors" && computerChoice === "paper")
    || (humanChoice === "paper" && computerChoice === "rock")) {
        ++humanScore;
        resultsContainer.textContent = `You win! ${capitalize(humanChoice)} beats ${computerChoice}!`;

    } 
    else if ((humanChoice === "rock" && computerChoice === "paper")
    || (humanChoice === "scissors" && computerChoice === "rock")
    || (humanChoice === "paper" && computerChoice === "scissors")) {
        ++computerScore;
        resultsContainer.textContent = `You lose! ${capitalize(computerChoice)} beats ${humanChoice}!`;
    }

    scoreContainer.textContent = `Player score: ${humanScore}, Computer score: ${computerScore}`;
    return;
}

function capitalize(str) {
    firstLetter = str[0].toUpperCase();
    return firstLetter + str.slice(1);
}

// Declare score variables
let humanScore = 0;
let computerScore = 0;
let gameResult = "";

// Create rock button
const rockButton = document.createElement("button");
rockButton.textContent = "Rock";
rockButton.classList.add("rock-button");

// Create paper button
const paperButton = document.createElement("button");
paperButton.textContent = "Paper";
paperButton.classList.add("paper-button");

// Create scissors button
const scissorsButton = document.createElement("button");
scissorsButton.textContent = "Scissors";
scissorsButton.classList.add("scissors-button");

// Create "Play Again", "Start Game", "End Game" buttons
const playAgainButton = document.createElement("button");
playAgainButton.textContent = "Play Again?";
playAgainButton.classList.add("play-again-button");

const startGameButton = document.createElement("button");
startGameButton.textContent = "Start Game";
startGameButton.classList.add("start-game-button");

const endGameButton = document.createElement("button");
endGameButton.textContent = "End Game";
endGameButton.classList.add("end-game-button");

// Create containers for holding buttons, results, scores
const mainBody = document.querySelector("body");

const buttonContainer = document.createElement("div");
buttonContainer.classList.add("button-container");
mainBody.appendChild(buttonContainer);
buttonContainer.appendChild(startGameButton);

const scoreContainer = document.createElement("div");
scoreContainer.classList.add("score-container");
mainBody.appendChild(scoreContainer);

const resultsContainer = document.createElement("div");
resultsContainer.classList.add("results-container");
mainBody.appendChild(resultsContainer);

// Button functionality
buttonContainer.addEventListener("click", (event) => {
    let target = event.target;
    switch (target.classList.value) {
        case 'start-game-button':
            buttonContainer.removeChild(startGameButton);
            addGameButtons();
            scoreContainer.textContent = `Player score: ${humanScore}, Computer score: ${computerScore}`;
            break;
        case 'rock-button':
            playRound("rock", getComputerChoice());
            isGameEnd();
            break;
        case 'paper-button':
            playRound("paper", getComputerChoice());
            isGameEnd();
            break;
        case 'scissors-button':
            playRound("scissors", getComputerChoice());
            isGameEnd();
            break;
        case 'play-again-button':
            resultsContainer.textContent = "";
            scoreContainer.textContent = `Player score: ${humanScore}, Computer score: ${computerScore}`;
            removeEndGameButtons();
            addGameButtons();
            break;
        case 'end-game-button':
            resultsContainer.textContent = "Thank you for playing!";
            scoreContainer.textContent = "";
            removeEndGameButtons();
    }
});

function isGameEnd() {
    if (humanScore === 5 || computerScore === 5) {
        if (humanScore > computerScore) {
            resultsContainer.textContent = "Congratulations! You win!";
        } else if (humanScore < computerScore) {
            resultsContainer.textContent = "You lose! Better luck next time!";
        } else {
            resultsContainer.textContent = "It's a tie!";
        };
        humanScore = 0;
        computerScore = 0;
        removeGameButtons();
        addEndGameButtons();
    }
    return;
}

function addGameButtons() {
    buttonContainer.appendChild(rockButton);
    buttonContainer.appendChild(paperButton);
    buttonContainer.appendChild(scissorsButton);
    return;
}

function removeGameButtons() {
    buttonContainer.removeChild(rockButton);
    buttonContainer.removeChild(paperButton);
    buttonContainer.removeChild(scissorsButton);
    return;
}

function addEndGameButtons() {
    buttonContainer.appendChild(playAgainButton);
    buttonContainer.appendChild(endGameButton);
    return;
}

function removeEndGameButtons() {
    buttonContainer.removeChild(playAgainButton);
    buttonContainer.removeChild(endGameButton);
    return;
}