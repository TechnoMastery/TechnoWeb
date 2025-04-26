window.addEventListener("DOMContentLoaded", () => {
  const phoneSpan = document.getElementById("phone");
  const statusText = document.getElementById("verif-status");

  const TEN_SECONDS = 10;
  let secondsLeft = TEN_SECONDS;

  const interval = setInterval(() => {
    const secs = secondsLeft;

    statusText.textContent = `Time remaining: ${secs}s`;

    if (secondsLeft <= 0) {
      clearInterval(interval);
      phoneSpan.textContent = "12 34 56 78";
      statusText.textContent = "You really believed that? lol 😂";
    }

    secondsLeft--;
  }, 1000);

  setTimeout(() => {
    document.body.style.animation = "shake 0.5s infinite";
    setTimeout(() => {
      document.body.innerHTML = `
        <div style="text-align:center; font-family:sans-serif;">
          <h1 style="font-size:3em; color:red; animation: pulse 1s infinite;">Please leave the page immediately.</h1>
          <p style="font-size:1.5em;">Cause: A giant invisible llama licked your screen. 🦙💦</p>
        </div>
      `;
    }, 1000);
  }, TEN_SECONDS * 1000);
});
const style = document.createElement('style');
style.textContent = `
@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}
`;
document.head.appendChild(style);
