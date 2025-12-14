function getComputerChoice() {

    // SET randomNumber to Math.random
    let randomNumber = Math.random();

    // IF randomNumber < 1/3 THEN
    if (randomNumber < 1/3) {
        //   DISPLAY computerChoice as "rock"
        return "rock"
    }
    // ELSE IF randomNumber > 2/3 THEN
    else if (randomNumber > 2/3) {
        //   DISPLAY computerChoice as "paper"
        return "paper"
    }
    // ELSE
    else {
        //   DISPLAY computerChoice as "scissors"
        return "scissors"
    }
    // ENDIF

    return "No choice possible"
}

function getHumanChoice() {

    // - GET humanChoice
    let humanChoice = prompt("Enter your choice: ", "");

    // - CALL toLowerCase to change humanChoice to lowercase letters
    humanChoice = humanChoice.toLowerCase();

    // - DISPLAY humanChoice
    return humanChoice
}

// Declare the players score variables
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    // - IF computerChoice is equal to humanChoice THEN
    if (computerChoice === humanChoice) {
        //   - DISPLAY "This is a tie!"
        console.log("This is a tie!");
        return
    // - ENDIF
    };

    // - IF humanChoice is rock and computerChoice is scissors
    if ((humanChoice === "rock" && computerChoice === "scissors")
    // - OR humanChoice is scissors and computerChoice is paper
    || (humanChoice === "scissors" && computerChoice === "paper")
    // - OR humanChoice is paper and computerChoice is rock THEN
    || (humanChoice === "paper" && computerChoice === "rock")) {
    //   - INCREASE humanScore by 1
        ++humanScore;
    //   - DISPLAY "You win! humanChoice beats computerChoice!"
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
        return
    // - ELSE IF humanChoice is rock and computerChoice is paper
    } else if ((humanChoice === "rock" && computerChoice === "paper")
    // - OR humanChoice is scissors and computerChoice is rock
    || (humanChoice === "scissors" && computerChoice === "rock")
    // - OR humanChoice is paper and computerChoice is scissors THEN
    || (humanChoice === "paper" && computerChoice === "scissors")) {
    //   - INCREASE computerScore by 1
        ++computerScore;
    //   - DISPLAY "You lose! computerChoice beats humanChoice!"
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
        return
    }
    // - ELSE
    //   - DISPLAY "Invalid input"
    console.log("Invalid input");
    return

}

function playGame() {

    // - SET playRound = 0
    let round = 0;
    // - FOR playRound = 0 to 5
    for (; round < 5; round++) {
    //   - GET humanSelection by calling getHumanChoice
        const humanSelection = getHumanChoice();
    //   - GET computerSelection by calling getComputerChoice
        const computerSelection = getComputerChoice();
    //   - CALL playRound with humanSelection and computerSelection
        playRound(humanSelection, computerSelection);
    // DISPLAY scores for both the player and the computer
        console.log(`You: ${humanScore}, Computer: ${computerScore}`);
    // - ENDFOR
    }
    // - IF humanScore > computerScore THEN
    if (humanScore > computerScore) {
    //   - DISPLAY "Congratulations! You won!"
        console.log("Congratulations! You won!");
        return
    // - ELSE IF computerScore > humanScore THEN
    } else if (computerScore > humanScore) {
    //   - DISPLAY "You lost! Better luck next time!"
        console.log("You lost! Better luck next time!");
        return
    // - ELSE
    } else {
    //   - DISPLAY "It's a tie!"
        console.log("It's a tie!")
        return
    }

}

playGame();