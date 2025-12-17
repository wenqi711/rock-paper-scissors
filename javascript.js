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

const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");

rockButton.textContent = "Rock";
paperButton.textContent = "Paper";
scissorsButton.textContent = "Scissors";

rockButton.addEventListener("click", () => {
    console.log("rock");
});

paperButton.addEventListener("click", () => {
    console.log("paper");
});

scissorsButton.addEventListener("click", () => {
    console.log("scissors");
});

const mainBody = document.querySelector("body");
mainBody.appendChild(rockButton);
mainBody.appendChild(paperButton);
mainBody.appendChild(scissorsButton);
