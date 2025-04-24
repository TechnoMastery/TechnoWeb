const phone = "12 34 56 78";
const phoneSpan = document.getElementById("phone");
const status = document.getElementById("verif-status");

let index = 0;

const revealInterval = setInterval(() => {
  if (index < phone.length) {
    phoneSpan.textContent += phone[index];
    index++;
  } else {
    clearInterval(revealInterval);
    startTimer();
  }
}, 150);

function startTimer() {
  let timer = 5;
  status.textContent = `Verification in ${timer}...`;
  const countdown = setInterval(() => {
    timer--;
    if (timer > 0) {
      status.textContent = `Verification in ${timer}...`;
    } else {
      clearInterval(countdown);
      status.textContent = "You really believed that? lol 😂";
    }
  }, 1000);
}

setInterval(() => {
  const firework = document.createElement('div');
  firework.className = 'firework';
  firework.style.left = `${Math.random() * 100}%`;
  firework.style.background = `hsl(${Math.random() * 360}, 100%, 70%)`;
  document.body.appendChild(firework);
  setTimeout(() => firework.remove(), 2000);
}, 300);
