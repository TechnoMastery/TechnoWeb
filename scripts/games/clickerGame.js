const state = {
    clicks: 0,
    clickPower: 1,
    autoClick: 0,
    upgrades: [
      { name: "Click strongness", cost: 10, value: 1, type: "click", level: 0 },
      { name: "Auto-clic", cost: 50, value: 1, type: "auto", level: 0 }
    ],
    achievements: []
  };

  const achievementsTemplate = [];
  for (let i = 1; i <= 50; i++) {
    const threshold = i * 10;
    achievementsTemplate.push({
      name: `${threshold} clics`,
      check: s => s.clicks >= threshold,
      unlocked: false
    });
  }
  state.achievements = achievementsTemplate.map(a => ({ ...a }));

  function handleClick() {
    state.clicks += state.clickPower;
    createFloating(`+${state.clickPower}`);
    checkAchievements();
    render();
  }

  function createFloating(text) {
    const span = document.createElement("span");
    span.className = "floating";
    span.textContent = text;
    span.style.left = `${Math.random() * 90 + 5}%`;
    span.style.top = `${Math.random() * 80 + 10}%`;
    document.body.appendChild(span);
    setTimeout(() => span.remove(), 1000);
  }

  function buyUpgrade(index) {
    const up = state.upgrades[index];
    if (state.clicks >= up.cost) {
      state.clicks -= up.cost;
      up.level++;
      up.value++;
      up.cost = Math.floor(up.cost * 1.1);
      if (up.type === "click") state.clickPower = up.value;
      else state.autoClick = up.value;
      render();
    }
  }

  function render() {
    document.getElementById("clicks").textContent = `Clicks: ${state.clicks}`;
    document.getElementById("cps").textContent = `Clicks per sec: ${state.autoClick}`;

    const upgDiv = document.getElementById("upgrades");
    upgDiv.innerHTML = "";
    state.upgrades.forEach((up, i) => {
      const btn = document.createElement("button");
      btn.textContent = `${up.name} +${up.value} (coût : ${up.cost})`;
      btn.className = "upgrade-btn";
      if (state.clicks >= up.cost) btn.classList.add("enabled");
      btn.onclick = () => buyUpgrade(i);
      upgDiv.appendChild(btn);
    });

    const achUl = document.getElementById("achievements");
    achUl.innerHTML = "";
    let unlockedCount = 0;
    state.achievements.forEach(ach => {
      if (!ach.unlocked && ach.check(state)) ach.unlocked = true;
      if (ach.unlocked) {
        unlockedCount++;
        const li = document.createElement("li");
        li.textContent = ach.name;
        achUl.appendChild(li);
      }
    });
    document.getElementById("achCount").textContent = unlockedCount;
  }

  function checkAchievements() {
    state.achievements.forEach(ach => {
      if (!ach.unlocked && ach.check(state)) {
        ach.unlocked = true;
      }
    });
  }

  function resetGame() {
    localStorage.removeItem("clickerGameSave");
    state.clicks = 0;
    state.clickPower = 1;
    state.autoClick = 0;
    state.upgrades.forEach(upg => { upg.level = 0; upg.value = 1; upg.cost = upg.type === "click" ? 10 : 50 });
    state.achievements.forEach(ach => ach.unlocked = false);
    render();
  }

  function saveGame() {
    localStorage.setItem("clickerGameSave", JSON.stringify(state));
  }

  function loadGame() {
    const saved = localStorage.getItem("clickerGameSave");
    if (saved) {
      const loaded = JSON.parse(saved);
      Object.assign(state, loaded);
      state.achievements.forEach((a, i) => {
        const original = achievementsTemplate[i];
        if (original) a.check = original.check;
      });
    }
  }

  // Initialisation du jeu
  loadGame();
  render();

  setInterval(() => {
    state.clicks += state.autoClick;
    if (state.autoClick > 0) createFloating(`+${state.autoClick}`);
    checkAchievements();
    render();
  }, 1000);

  setInterval(saveGame, 5000);
  window.addEventListener("beforeunload", saveGame);