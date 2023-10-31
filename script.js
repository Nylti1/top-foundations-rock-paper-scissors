const playerText = document.querySelector('#player-text');
const computerText = document.querySelector('#computer-text');
const resultText = document.querySelector('#result-text');
const buttons = document.querySelectorAll('.buttons');

let player;
let computer;

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    player = btn.textContent;
    console.log(player);
  });
});
