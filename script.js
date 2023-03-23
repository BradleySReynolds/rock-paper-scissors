const computerChoice = document.querySelector(".computer-choice");
const playerChoice = document.querySelector(".player-choice");
const score = document.querySelector(".score");

const choose = document.querySelector(".choose");
const inputBtn = document.querySelector(".ipt-choose");

const playerCon = document.querySelector(".player-choice--container");
const computerCon = document.querySelector(".computer-choice--container");

const computerResult = document.querySelector(".computer-result");
const playerResult = document.querySelector(".player-result");

let playerScore = 0;
let computerScore = 0;
const rockPaperOrScissor = ["rock", "paper", "scissors"];

inputBtn.addEventListener("click", () => {
  console.log();
  game();
});

const playerWins = () => {
  playerResult.textContent = "Player Wins!";
  computerResult.textContent = "Computer Loses.";
};

const computerWins = () => {
  playerResult.textContent = "Player Loses.";
  computerResult.textContent = "Computer Wins!";
};

const getComputerChoice = () => {
  let random = Math.floor(Math.random() * 3);
  return rockPaperOrScissor[random];
};

const getPlayerChoice = () => {
  let player = String(choose.value).toLowerCase();
  if (player !== "rock" && player !== "paper" && player !== "scissors") {
    alert("You didn't pick a valid response");
  } else return player;
};

const game = () => {
  let comp = getComputerChoice();
  let play = getPlayerChoice();

  if (play === undefined) return 0;

  if (comp === play) {
    console.log("draw");
  }

  if (comp === "rock" && play !== "rock") {
    if (play === "paper") {
      playerScore++;
      playerWins();
    } else {
      computerScore++;
      computerWins();
    }
  }

  if (comp === "paper" && play !== "paper") {
    if (play === "scissors") {
      playerScore++;
      playerWins();
    } else {
      computerScore++;
      computerWins();
    }
  }

  if (comp === "scissors" && play !== "scissors") {
    if (play === "rock") {
      playerScore++;
      playerWins();
    } else {
      computerScore++;
      computerWins();
    }
  }

  playerCon.style.backgroundImage = `url(images/${play}.jpg)`;
  computerCon.style.backgroundImage = `url(images/${comp}.jpg)`;
  score.textContent = `${computerScore} : ${playerScore}`;
  computerChoice.textContent = `Computer chose: ${comp}`;
  playerChoice.textContent = `Player chose: ${play}`;
};
