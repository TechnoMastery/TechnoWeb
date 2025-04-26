window.addEventListener("DOMContentLoaded", () => {
  const revealBtn = document.getElementById("reveal-btn");
  const phoneSpan = document.getElementById("phone");
  const statusText = document.getElementById("verif-status");

  function startRevealSequence() {
    revealBtn.disabled = true;
    let secondsLeft = 10;

    const interval = setInterval(() => {
      statusText.textContent = `Time remaining: ${secondsLeft}s`;

      if (secondsLeft <= 0) {
        clearInterval(interval);
        phoneSpan.textContent = "12 34 56 78";
        statusText.textContent = "You really believed that? lol 😂";
        setTimeout(triggerGravityCollapse, 2000);
      }

      secondsLeft--;
    }, 1000);
  }

  function triggerGravityCollapse() {
    const allElements = Array.from(document.body.children);

    allElements.forEach(elem => {
      elem.style.position = 'relative';
      elem.style.transition = 'transform 2s ease-in, opacity 2s ease-in';
      const rotate = Math.random() * 40 - 20;
      elem.style.transform = `translateY(120vh) rotate(${rotate}deg)`;
      elem.style.opacity = '0';
    });

    for (let i = 0; i < 30; i++) {
      createFallingBolt();
    }

    setTimeout(() => {
      document.body.innerHTML = `
        <h1>Please leave the page immediately.</h1>
        <p>Cause: Gravity malfunction. All bolts are gone. 🔩💥</p>
      `;
      document.body.style.backgroundColor = "#000";
      document.body.style.color = "#fff";
      document.body.style.textAlign = "center";
      document.body.style.marginTop = "50px";
    }, 3000);
  }

  function createFallingBolt() {
    const bolt = document.createElement("div");
    bolt.textContent = "🔩";
    bolt.style.position = "fixed";
    bolt.style.left = `${Math.random() * 100}vw`;
    bolt.style.top = `-5vh`;
    bolt.style.fontSize = `${Math.random() * 20 + 20}px`;
    bolt.style.pointerEvents = "none";
    bolt.style.zIndex = 9999;
    document.body.appendChild(bolt);

    let speed = Math.random() * 2 + 2;
    let rotate = 0;
    const rotationSpeed = Math.random() * 4 - 2;
    const fall = setInterval(() => {
      const top = parseFloat(bolt.style.top);
      bolt.style.top = `${top + speed}px`;
      rotate += rotationSpeed;
      bolt.style.transform = `rotate(${rotate}deg)`;

      if (top > window.innerHeight) {
        clearInterval(fall);
        bolt.remove();
      }
    }, 16); // 60fps
  }

  revealBtn.addEventListener("click", startRevealSequence);
});
