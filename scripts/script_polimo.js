window.addEventListener("DOMContentLoaded", () => {
  const clickableCard = document.getElementById("clickable-card");
  const timerStatus = document.getElementById("timer-status");
  const finalMessage = document.getElementById("final-message");

  clickableCard.addEventListener("click", () => {
    let timer = 10;
    timerStatus.textContent = `Timer started! Time remaining: ${timer}s`;

    const interval = setInterval(() => {
      timer--;
      timerStatus.textContent = `Time remaining: ${timer}s`;

      if (timer <= 0) {
        clearInterval(interval);
        timerStatus.textContent = "Timer ended!";
        finalMessage.textContent = "You really believed that? lol 😂";

        setTimeout(() => {
          window.location.href = "https://technomastery.github.io/TechnoWeb/pages/profiles/";
        }, 3000);
      }
    }, 1000);
  });
});
