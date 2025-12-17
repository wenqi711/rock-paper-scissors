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
        resultsContainer.textContent = `It's a tie!
        Player score: ${humanScore}, Computer score: ${computerScore}`;
    } 
    else if ((humanChoice === "rock" && computerChoice === "scissors")
    || (humanChoice === "scissors" && computerChoice === "paper")
    || (humanChoice === "paper" && computerChoice === "rock")) {
        ++humanScore;
        resultsContainer.textContent = `You win! ${humanChoice} beats ${computerChoice}!
        Player score: ${humanScore}, Computer score: ${computerScore}`;

    } 
    else if ((humanChoice === "rock" && computerChoice === "paper")
    || (humanChoice === "scissors" && computerChoice === "rock")
    || (humanChoice === "paper" && computerChoice === "scissors")) {
        ++computerScore;
        resultsContainer.textContent = `You lose! ${computerChoice} beats ${humanChoice}!
        Player score: ${humanScore}, Computer score: ${computerScore}`;
    }
    return;
}

function playAgain() {
    return;
}

let humanScore = 0;
let computerScore = 0;

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

const mainBody = document.querySelector("body");
const buttonContainer = document.createElement("div");
mainBody.appendChild(buttonContainer);
buttonContainer.appendChild(rockButton);
buttonContainer.appendChild(paperButton);
buttonContainer.appendChild(scissorsButton);

const resultsContainer = document.createElement("div");
mainBody.appendChild(resultsContainer);

buttonContainer.addEventListener("click", (event) => {
    let target = event.target;
    switch (target.classList.value) {
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
    }
});

function isGameEnd() {
    if (humanScore === 5 || computerScore === 5) {
        buttonContainer.removeChild(rockButton);
        buttonContainer.removeChild(paperButton);
        buttonContainer.removeChild(scissorsButton);
        if (humanScore > computerScore) {
            resultsContainer.textContent = "Congratulations! You win!";
        } else if (humanScore < computerScore) {
            resultsContainer.textContent = "You lose! Better luck next time!";
        } else {
            resultsContainer.textContent = "It's a tie!";
        }
    }
    return;
}