function getComputerChoice() {

    // SET randomNumber to Math.random
    let randomNumber = Math.random();

    // IF randomNumber < 1/3 THEN
    if (randomNumber < 1/3) {
        //   DISPLAY computerChoice as "Rock"
        return "Rock"
    }
    // ELSE IF randomNumber > 2/3 THEN
    else if (randomNumber > 2/3) {
        //   DISPLAY computerChoice as "Paper"
        return "Paper"
    }
    // ELSE
    else {
        //   DISPLAY computerChoice as "Scissors"
        return "Scissors"
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