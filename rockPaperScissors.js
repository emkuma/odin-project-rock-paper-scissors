let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    computerChoice = "rock";
    return computerChoice;
  }
  if (randomNumber === 2) {
    computerChoice = "paper";
    return computerChoice;
  }
  if (randomNumber === 3) {
    computerChoice = "scissors";
    return computerChoice;
  }
 }

 function getHumanChoice() {
  humanChoice = prompt("rock, paper, or scissors? ").toLowerCase();
  return humanChoice;
 }

 function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`${humanChoice} ties with ${computerChoice}!`)
  }

  if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock") {
    humanScore ++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    console.log(`Your score: ${humanScore}   Computer: ${computerScore}`)
  }
  if (humanChoice === "paper" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "rock") {
    computerScore ++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    console.log(`Your score: ${humanScore}   Computer: ${computerScore}`)
  }
  if (humanChoice === "scissors" && computerChoice === "paper" || humanChoice === "rock" && computerChoice === "scissors") {
    humanScore ++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    console.log(`Your score: ${humanScore}   Computer: ${computerScore}`)
  }
  
 getComputerChoice();

 getHumanChoice();

 playRound(humanChoice, computerChoice);