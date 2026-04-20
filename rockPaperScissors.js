let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3) + 1;

  if (computerChoice === 1) {
    computerChoice = "rock";
  }
  if (computerChoice === 2) {
    computerChoice = "paper";
  }
  if (computerChoice === 3) {
    computerChoice = "scissors";
  }
   console.log("Computer: ", computerChoice); 
   return computerChoice;
 }

 function getHumanChoice() {
    let humanChoice = prompt("rock, paper, or scissors? ").toLowerCase();
    if (humanChoice === null) {
      console.log("User clicked Cancel")
      return;
    }
    console.log("You: ", humanChoice);
    return humanChoice; 
  }
 
  
  let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();

  console.log(`Human: ${humanChoice} Computer: ${computerChoice}`);

 function playRound(humanChoice, computerChoice) {
  let winner;
  
  if (humanChoice === computerChoice) {
    console.log(`${humanChoice} ties with ${computerChoice}!`)
    return ['Tie', humanScore, computerScore];
  }

  if ((humanChoice === "rock" && computerChoice === "scissors") || 
     (humanChoice === "paper" && computerChoice === "rock") ||
     (humanChoice === "scissors" && computerChoice === "paper"))
    {
      humanScore ++;
      winner = 'You';
    }
    else {
      computerScore++;
      winner = 'Computer';
    }
   
  result = [winner, humanScore, computerScore];
  return result;
 }

 function playGame(humanChoice, computerChoice, humanScore, computerScore, winner) {
  for (let i = 0; i < 5; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    
    let result = playRound(humanChoice, computerChoice, humanScore, computerScore);

    let winner = result[0];
    humanScore = result[1];
    computerScore = result[2];

    if (winner === 'You') {
      console.log(`You win!  ${humanChoice} beats ${computerChoice}`);
    }  
    else if (winner === 'Computer') {
      console.log(`Computer wins!  ${computerChoice} beats ${humanChoice}!`);
    }
    console.log(`It's a tie!`);
  }
  console.log(`Score -> You: ${humanScore} | Computer: ${computerScore}`);
  console.log(`---------------------------------------`);
 }

 if (humanScore > computerScore) {
  console.log("You win the game!");

 }else if (computerScore > humanScore) {
  console.log("Computer wins the game!");

 }else {
  console.log("Tie game!");
 }

playGame();