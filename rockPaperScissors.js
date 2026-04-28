humanScore = 0;
computerScore = 0;  

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const computerPick = choices[Math.floor(Math.random() * 3)];
  return computerPick;
}

function getHumanChoice() {
  console.log("Prompt opening ... ")
  let myPick = prompt("rock, paper, or scissors? ");
  console.log(`You: ${myPick}`);
  if (myPick === null) {
    return null;
  }
  myPick = myPick.toLowerCase();

  if (myPick === "rock" || myPick === "paper" || myPick === "scissors") {
    return myPick;
  }

  return "Invalid";

  }

  computerChoice = getComputerChoice();
  humanChoice = getHumanChoice();
  console.log(`Computer: ${computerChoice} | You: ${humanChoice}`);


 function playRound(myPick, computerPick) {
  let winner;
  
  const validChoices = ["rock", "paper", "scissors"];
  if (myPick === null) {
    return { winner: 'Cancelled', myPick, computerPick };
  }
  if (!validChoices.includes(myPick)) {
    return { winner: 'Invalid', myPick, computerPick };
  }

  if (myPick === computerPick) {
    console.log(`${myPick} ties with ${computerPick}!`)
    winner = 'Tie';
  } else if (
    (myPick === "rock" && computerPick === "scissors") || 
    (myPick === "paper" && computerPick === "rock") ||
    (myPick === "scissors" && computerPick === "paper")
  ) {
    winner = 'You';
  } else {
    winner = 'Computer';
  }
  result = { winner, myPick, computerPick };
  return result;
 }

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let roundsPlayed = 0;

  while (roundsPlayed < 5) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    if (humanChoice === null) {
      console.log("Game cancelled by user.");
      break;
    }

    if (humanChoice === "Invalid") {
      console.log("Invalid input. Please enter rock, paper, or scissors.");
      continue; 
    }

    let result = playRound(humanChoice, computerChoice);

    let winner = result.winner;
    let myPick = result.myPick;
    let computerPick = result.computerPick;

    if (result.winner === 'Invalid') {
      console.log("Invalid input. Please enter rock, paper, or scissors.");
      continue; 
    }

    if(result.winner === 'Cancelled') {
      console.log("Game cancelled by user.");
      break;
    }

    console.log(`Computer: ${computerPick} | You: ${myPick}`);
    if (winner === "You") humanScore++;
    else if (winner === "Computer") computerScore++;

    roundsPlayed++; 

    console.log(`Score -> You: ${humanScore} | Computer: ${computerScore}`);
  }
}
  
playGame();