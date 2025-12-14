function getComputerChoice() {

    // SET randomNumber to Math.random
    randomNumber = Math.random();

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