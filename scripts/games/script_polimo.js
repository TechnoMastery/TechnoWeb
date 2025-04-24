let timer = 5;
const status = document.getElementById("verif-status");

const interval = setInterval(() => {
  if (timer > 0) {
    status.textContent = `Verifying in ${timer}...`;
    timer--;
  } else {
    clearInterval(interval);
    status.textContent = "You really believed that? lol 😂";
  }
}, 1000);


setInterval(() => {
  const firework = document.createElement('div');
  firework.className = 'firework';
  firework.style.left = `${Math.random() * 100}%`;
  firework.style.background = `hsl(${Math.random() * 360}, 100%, 70%)`;
  document.body.appendChild(firework);
  setTimeout(() => firework.remove(), 2000);
}, 300);