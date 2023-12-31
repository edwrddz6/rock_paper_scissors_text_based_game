// Parameters - I need to create a rock/paper/scissors game that will play against the computer. I am given a direction to create a function called 'getComputerChoice' to randomly
//              return rock/paper/scissors. Also, I am asked to write a function that will take 2 parameters (playerSelection and computerSelection) and then returns a string declaring
//              the winner. A note mentioned: make sure playerSelection parameter is case-insensitive. Also, results need to come from RETURN and not CONSOLE.LOG. I need to create a function 
//              called 'game' and use the previous function inside of this new function to play a 5-round game that keeps score and reports a loser at the end. At this 
//              point I should be using console.log() to display the results of each round and the winner at the end. I need to use prompt() to get input from the user.
// Results - Every iteration will be an alert stating who won the round. After 5 rounds, user or computer will be declared the loser of the game based on the total tally of losses.
// Example - I get the prompt to input a value of rock/paper/scissors and computer will randomly select their own input. Afterwards, the winner is declared with alert('You win! Rock
//           beats Scissors). 
// Pseudocode - I need to define the scores from user and computer with 2 seperate variables. Create a function to ask user for inputs with a prompt. A function to ask computer for their 
//              choice using Math.random. Create another function that takes in both inputs as arguments. Use If Else to test and output alert message declaring winner. Increments winners'
//              score. Create a function that counts round number and run a While loop as long as computer and user's score are < 2(best 2/3). Inside the While loop needs to increment round counter
//              give an alert with round number and user/computer's current scores. Run compare choice, passing it user's choice and computer's choice.



let computerScore = 0;
let userScore = 0;
let roundCounter = 0;

let arr = ["Rock", "Paper", "Scissors"];

function getUserChoice() {
  const buttonId = document.activeElement.id;

  let userChoice;
  switch (buttonId) {
    case "rockBtn":
      userChoice = "Rock";
      break;
    case "paperBtn":
      userChoice = "Paper";
      break;
    case "scissorsBtn":
      userChoice = "Scissors";
      break;
    default:
      choice = "Unknown";
  }
  return userChoice;
}

function getComputerChoice() {
  let i = Math.floor(Math.random() * arr.length);
  let computerChoice = arr[i];
  return computerChoice;
}

function compareChoice(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      alert("It's a tie! Go Again.");
    } else if (
        (userChoice === "Rock" && computerChoice === "Scissors") ||
        (userChoice === "Scissors" && computerChoice === "Paper") ||
        (userChoice === "Paper" && computerChoice === "Rock")) { 
            alert(`You win! ${userChoice} beats ${computerChoice}.`);
            userScore++;
    } else {
        alert(`You lose! ${computerChoice} beats ${userChoice}`);
        computerScore++;
    }
  }

function playGame() {
  if (userScore < 2 && computerScore < 2) {
    let userChoice = getUserChoice();
    let computerChoice = getComputerChoice();
    compareChoice(userChoice, computerChoice);
    roundCounter++;
    document.getElementById('resultsDisplay1').textContent = `Round #${roundCounter}, Current Score - User: ${userScore}, Computer: ${computerScore}`;
    
    
      if (userScore === 2) {
        document.getElementById('resultsDisplay2').textContent = `Yes! You won!`;
      } else if (computerScore === 2) {
        document.getElementById('resultsDisplay2').textContent = `Sorry! You Lost!`;
      }
    }
  }

const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');

rockBtn.addEventListener('click', playGame);
paperBtn.addEventListener('click', playGame);
scissorsBtn.addEventListener('click', playGame);