# TOP Project #3

## Pseudocode

### getComputerChoice

> Hint: The Math.random method returns a random number that’s greater than or equal to 0 and less than 1. Think about how you can use this to conditionally return one of the multiple choices.

We want the computer to draw rock, paper, and scissors at an equally random rate, so if we use Math.random, then we can assign a range of numbers to the choices. For instance, numbers below 1/3 could be assigned to rock, numbers between 1/3 and 2/3 to paper, and numbers larger than 2/3 to scissors.

So for this function, we can write:

- SET randomNumber to Math.random
- IF randomNumber < 1/3 THEN
  - DISPLAY computerChoice as "rock"
- ELSE IF randomNumber > 2/3 THEN
  - DISPLAY computerChoice as "paper"
- ELSE
  - DISPLAY computerChoice as "scissors"
- ENDIF

### getHumanChoice

We are assuming that the user will always input a valid choice, which I am setting as the words "rock", "paper", and "scissors". We can deal with capitalisation using toLowerCase().

So for this function, we can write:

- GET humanChoice
- CALL toLowerCase to change humanChoice to lowercase letters
- DISPLAY humanChoice

### playRound

This is the logic for one round. We take computerChoice and humanChoice as arguments and determine which one will win, increasing the corresponding player's score. We know rock beats scissors, paper beats rock, and scissors beats paper. So for this function, we can write:

- IF computerChoice is equal to humanChoice THEN
  - DISPLAY "This is a tie!"
- ENDIF

- IF humanChoice is rock and computerChoice is scissors
- OR humanChoice is scissors and computerChoice is paper
- OR humanChoice is paper and computerChoice is rock THEN
  - INCREASE humanScore by 1
  - DISPLAY "You win! humanChoice beats computerChoice!"
- ELSE IF humanChoice is rock and computerChoice is paper
- OR humanChoice is scissors and computerChoice is rock
- OR humanChoice is paper and computerChoice is scissors THEN
  - INCREASE computerScore by 1
  - DISPLAY "You lose! computerChoice beats humanChoice!"
- ELSE
  - DISPLAY "Invalid input"
- ENDIF

### playGame

The game is played for a total of 5 rounds. We can write:

- SET round = 0
- FOR round = 0 to 5
  - GET humanSelection by calling getHumanChoice
  - GET computerSelection by calling getComputerChoice
  - CALL playRound with humanSelection and computerSelection
- ENDFOR
- IF humanScore > computerScore
  - DISPLAY "Congratulations! You won!"
- ELSE IF computerScore > humanScore
  - DISPLAY "You lost! Better luck next time!"
- ELSE
  - DISPLAY "It's a tie!"

