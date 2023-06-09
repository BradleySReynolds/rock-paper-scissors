const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const playerScore = document.querySelector(".player");
const computerScore = document.querySelector(".computer");

const result = document.querySelector(".results");

const playAgain = document.querySelector(".play-again");

const btns = [rock, paper, scissors];

const rockPaperOrScissor = ["rock", "paper", "scissors"];

let [playerScoreValue, computerScoreValue] = [0, 0];
let resultValue = "";

const getComputerChoice = () => {
  let random = Math.floor(Math.random() * 3);
  return rockPaperOrScissor[random];
};

const getPlayerChoice = (e) => {
  let player = e.target.id;
  return player;
};

const game = (e) => {
  let playerChoice = getPlayerChoice(e);
  let computerChoice = getComputerChoice();

  if (playerScoreValue < 5 && computerScoreValue < 5) {
    if (playerChoice === computerChoice) {
      playerScoreValue++;
      computerScoreValue++;
      resultValue = "Draw";
    } else {
      if (computerChoice === "rock") {
        if (playerChoice === "paper") {
          playerScoreValue++;
          resultValue = "Player Wins";
        } else {
          computerScoreValue++;
          resultValue = "Computer Wins";
        }
      }

      if (computerChoice === "paper") {
        if (playerChoice === "scissors") {
          playerScoreValue++;
          resultValue = "Player Wins";
        } else {
          computerScoreValue++;
          resultValue = "Computer Wins";
        }
      }

      if (computerChoice === "scissors") {
        if (playerChoice === "rock") {
          playerScoreValue++;
          resultValue = "Player Wins";
        } else {
          computerScoreValue++;
          resultValue = "Computer Wins";
        }
      }
    }

    playerScore.textContent = playerScoreValue;
    computerScore.textContent = computerScoreValue;

    result.textContent = resultValue;
  }
  if (playerScoreValue >= 5) {
    result.textContent = "The Player has Won the Game";
  } else if (computerScoreValue >= 5) {
    result.textContent = "The Computer has Won the Game";
  }
};

btns.forEach((ele) => ele.addEventListener("click", game));
playAgain.addEventListener("click", () => {
  playerScore.textContent = "";
  computerScore.textContent = "";
  playerScoreValue = 0;
  computerScoreValue = 0;
  result.textContent = "";
});
