const playerText = document.querySelector('#player-text');
const computerText = document.querySelector('#computer-text');
const resultText = document.querySelector('#result-text');
const buttons = document.querySelectorAll('.buttons');

let player;
let computer;

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    player = btn.textContent;
    computerChoice();

    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = `Result: ${checkWinner()}`;
  });
});

function computerChoice() {
  const randNum = Math.floor(Math.random() * 3) + 1;

  switch (randNum) {
    case 1:
      computer = 'ROCK';
      break;
    case 2:
      computer = 'PAPER';
      break;
    case 3:
      computer = 'SCISSORS';
      break;
  }
}

function checkWinner() {
  if (computer == player) {
    return 'Draw';
  } else if (computer == 'ROCK') {
    return player == 'PAPER' ? 'You Win' : 'You Lose';
  } else if (computer == 'PAPER') {
    return player == 'SCISSORS' ? 'You Win' : 'You Lose';
  } else if (computer == 'SCISSORS') {
    return player == 'ROCK' ? 'You Win' : 'You Lose';
  }
}
