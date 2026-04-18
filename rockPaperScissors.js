let humanScore = 0;
let computerScore = 0;
let tally = [];

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

 function playRound(humanChoice, computerChoice, humanScore, computerScore) {
  if (humanChoice === computerChoice) {
    console.log(`${humanChoice} ties with ${computerChoice}!`)
    return;
  }

  if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock") {
    humanScore ++;
    winner = 'You';
  }
  if (humanChoice === "paper" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "rock") {
    computerScore ++;
    winner = 'Computer';
  }
  if (humanChoice === "scissors" && computerChoice === "paper" || humanChoice === "rock" && computerChoice === "scissors") {
    humanScore ++;
    winner = 'You';
  }
  tally = [winner, humanScore, computerScore];

  return tally;
 }

 function playGame(humanChoice, computerChoice, humanScore, computerScore) {
  for (let i = 0; i < 5; i++) {
    playRound(humanChoice, computerChoice, humanScore, computerScore);

    if (tally[0] == 'You') {
      console.log(`${tally[0]} win!  ${humanChoice} beats ${computerChoice}`);
    }  
    else if (tally[0] == 'Computer') {
      console.log(`${tally[0]} wins!  ${computerChoice} beats ${humanChoice}!`);
    }
    console.log(`You: ${tally[1]}  Computer: ${tally[2]}`); 
  }
 }

 getComputerChoice();

 getHumanChoice();

 playGame(humanChoice, computerChoice, humanScore, computerScore, tally);