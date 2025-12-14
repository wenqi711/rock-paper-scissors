# TOP Project #3

## Pseudocode

### getComputerChoice

> Hint: The Math.random method returns a random number that’s greater than or equal to 0 and less than 1. Think about how you can use this to conditionally return one of the multiple choices.

We want the computer to draw rock, paper, and scissors at an equally random rate, so if we use Math.random, then we can assign a range of numbers to the choices. For instance, numbers below 1/3 could be assigned to rock, numbers between 1/3 and 2/3 to paper, and numbers larger than 2/3 to scissors.

So for this function, we can write:

- SET randomNumber to Math.random
- IF randomNumber < 1/3 THEN
  - DISPLAY computerChoice as "Rock"
- ELSE IF randomNumber > 2/3 THEN
  - DISPLAY computerChoice as "Paper"
- ELSE
  - DISPLAY computerChoice as "Scissors"
- ENDIF

### getHumanChoice

We are assuming that the user will always input a valid choice, which I am setting as the words "rock", "paper", and "scissors". We can deal with capitalisation using toLowerCase().

So for this function, we can write:

- GET humanChoice
- CALL toLowerCase to change humanChoice to lowercase letters
- DISPLAY humanChoice
