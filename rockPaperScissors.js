items = ['rock', 'paper', 'scissors'];
console.log("test");

function getComputerChoice(item) {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber == 1) {
    let item = "rock";
  }
  else if (randomNumber == 2) {
    let item = "paper";
  }
  else if (randomNumber == 3) {
    let item = "scissors";
  }
  // console.log(item);
  return item;
}

item = "";
console.log(item);
getComputerChoice(item);




