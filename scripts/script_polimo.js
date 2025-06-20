window.addEventListener("DOMContentLoaded", () => {
  const clickableCard = document.getElementById("clickable-card");
  const timerStatus = document.getElementById("timer-status");
  const finalMessage = document.getElementById("final-message");

  clickableCard.addEventListener("click", () => {
    let timer = 10;
    let chaosInterval;
    timerStatus.textContent = `Timer started! Time remaining: ${timer}s`;

    clickableCard.classList.add('shake');

    chaosInterval = setInterval(() => {
      timer--;
      timerStatus.textContent = `Time remaining: ${timer}s`;

      document.body.style.backgroundColor = `hsl(${Math.random() * 360}, 80%, 90%)`;
      document.body.style.transform = `rotate(${(Math.random() - 0.5) * 10}deg) scale(${1 + (Math.random() * 0.05)})`;

      if (timer <= 0) {
        clearInterval(chaosInterval);
        timerStatus.textContent = "Timer ended!";
        finalMessage.textContent = "You really believed that? lol 😂";

        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        document.body.style.transform = "none";

        setTimeout(() => {
          window.location.href = "https://technomastery.github.io/TechnoWeb/pages/profiles/";
        }, 3000);
      }
    }, 1000);
  });
});

  function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    let timeString;
    
    if (timezone.includes('Europe')) {
      timeString = `${hours}:${minutes}:${seconds}`;
    } else {
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const hours12 = hours % 12;
      const displayHours = hours12 === 0 ? 12 : hours12;
      timeString = `${displayHours}:${minutes}:${seconds} ${ampm}`;
    }
    document.getElementById('time').textContent = timeString;
  }
  setInterval(updateClock, 1000);
  updateClock();