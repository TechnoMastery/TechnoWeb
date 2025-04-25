window.addEventListener("DOMContentLoaded", () => {
  const revealBtn = document.getElementById("reveal-btn");
  const phoneSpan = document.getElementById("phone");
  const statusText = document.getElementById("verif-status");

  let interval;
  let collapseTimeout;

  function startRevealSequence() {
    revealBtn.disabled = true;
    let secondsLeft = 10;

    interval = setInterval(() => {
      statusText.textContent = `Time remaining: ${secondsLeft}s`;

      if (secondsLeft <= 0) {
        clearInterval(interval);
        phoneSpan.textContent = "12 34 56 78";
        statusText.textContent = "You really believed that? lol 😂";
      }

      secondsLeft--;
    }, 1000);

    collapseTimeout = setTimeout(() => {
      collapsePage("The cosmic ducks sabotaged the CSS. 🦆💥");
    }, 10000);
  }

  function collapsePage(cause) {
    const body = document.body;
    let scale = 1;

    const collapseInterval = setInterval(() => {
      scale -= 0.05;
      body.style.transform = `scaleY(${Math.max(0, scale)})`;

      if (scale <= 0.1) {
        clearInterval(collapseInterval);
        body.innerHTML = `
          <h1>Please leave the page immediately.</h1>
          <p>Cause: ${cause}</p>
        `;
        body.style.transform = 'scaleY(1)';
      }
    }, 50);
  }

  revealBtn.addEventListener("click", startRevealSequence);
});
