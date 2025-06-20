const keyMapping = { 'a': 'green', 'z': 'red', 'q': 'yellow', 's': 'blue' };
const sounds = {
  green: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
  red: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
  yellow: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),
  blue: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')
};
const directions = ['green', 'red', 'yellow', 'blue'];
let sequence = [], userSequence = [];
let started = false, level = 0, speed = 600;

function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

async function playSequence() {
  for (let color of sequence) {
    const tile = document.getElementById(color);
    tile.classList.add('highlight');
    sounds[color].currentTime = 0;
    sounds[color].play();
    await sleep(speed);
    tile.classList.remove('highlight');
    await sleep(150);
  }
}

function newColor() { sequence.push(directions[Math.floor(Math.random() * directions.length)]); }

function resetGame() {
  sequence = []; userSequence = []; started = false; level = 0; speed = 600;
  document.getElementById('message').textContent = 'You lost! Click or press a key to restart.';
  document.getElementById('level').textContent = 'Level: 0';
}

async function nextRound() {
  userSequence = []; level++;
  if (speed > 250) speed -= 20;
  document.getElementById('level').textContent = 'Level: ' + level;
  newColor();
  await playSequence();
  document.getElementById('message').textContent = 'Your turn!';
}

async function handleInput(color) {
  if (!started) {
    started = true;
    sequence = []; level = 0; speed = 600;
    await nextRound();
    return;
  }
  const tile = document.getElementById(color);
  tile.classList.add('highlight');
  sounds[color].currentTime = 0;
  sounds[color].play();
  setTimeout(() => tile.classList.remove('highlight'), 200);
  userSequence.push(color);
  const currentIndex = userSequence.length - 1;
  if (userSequence[currentIndex] !== sequence[currentIndex]) {
    resetGame(); return;
  }
  if (userSequence.length === sequence.length) {
    document.getElementById('message').textContent = 'Well done! Next level...';
    await sleep(1000);
    nextRound();
  }
}

document.addEventListener('keydown', (e) => {
  const key = e.key.toLowerCase();
  if (key in keyMapping) handleInput(keyMapping[key]);
});
document.querySelectorAll('.tile').forEach(tile => {
  tile.addEventListener('click', () => handleInput(tile.id));
});