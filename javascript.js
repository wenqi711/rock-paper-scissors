function getComputerChoice() {

    let randomNumber = Math.random();

    if (randomNumber < 1/3) {
        return "rock"
    }
    else if (randomNumber > 2/3) {
        return "paper"
    }
    else {
        return "scissors"
    }

    return "No choice possible"
}

function getHumanChoice() {

    let humanChoice = prompt("Enter your choice: ", "");
    humanChoice = humanChoice.toLowerCase();

    return humanChoice
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    if (computerChoice === humanChoice) {
        console.log("This is a tie!");
        return
    };

    if ((humanChoice === "rock" && computerChoice === "scissors")
    || (humanChoice === "scissors" && computerChoice === "paper")
    || (humanChoice === "paper" && computerChoice === "rock")) {
        ++humanScore;
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
        return

    } else if ((humanChoice === "rock" && computerChoice === "paper")
    || (humanChoice === "scissors" && computerChoice === "rock")
    || (humanChoice === "paper" && computerChoice === "scissors")) {
        ++computerScore;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
        return
    }

    console.log("Invalid input");
    return

}

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
            break;
        case 'paper-button':
            playRound("paper", getComputerChoice());
            break;
        case 'scissors-button':
            playRound("scissors", getComputerChoice());
            break;
    }
});