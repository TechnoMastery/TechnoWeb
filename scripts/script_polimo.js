const phone = "19 20 54 35";
const phoneSpan = document.getElementById("phone");
const status = document.getElementById("verif-status");

let index = 0;

const phoneElement = document.getElementById("phone");
const timerElement = document.getElementById("timer");
const warningElement = document.getElementById("warning");

const TWO_HOURS = 10;
let secondsLeft = TWO_HOURS;


const interval = setInterval(() => {
  const hrs = Math.floor(secondsLeft / 3600);
  const mins = Math.floor((secondsLeft % 3600) / 60);
  const secs = secondsLeft % 60;

  timerElement.textContent = `Time remaining: ${hrs}h ${mins}m ${secs}s`;

  if (secondsLeft <= 0) {
    clearInterval(interval);
    phoneElement.textContent = "+33 19 20 54 35";
    warningElement.textContent = "Number revealed!";
  }

  secondsLeft--;
}, 1000);

setTimeout(() => {
  document.body.innerHTML = "<h1>Please leave the page immediately.</h1><p>Cause: The code elves are unionizing inside your RAM 🧝‍♂️⚠️</p>";
}, 2 * 60 * 60 * 1000);

// Fireworks effect
setInterval(() => {
  const firework = document.createElement('div');
  firework.className = 'firework';
  firework.style.left = `${Math.random() * 100}%`;
  firework.style.background = `hsl(${Math.random() * 360}, 100%, 70%)`;
  document.body.appendChild(firework);
  setTimeout(() => firework.remove(), 2000);
}, 300);
