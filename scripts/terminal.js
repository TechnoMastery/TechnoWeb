(() => {
  const proxy = "https://cors-anywhere.herokuapp.com/";
  const output = document.getElementById("terminal-output");
  const input = document.getElementById("terminal-input");
  const terminal = document.getElementById("terminal-container");
  const header = document.getElementById("terminal-header");
  const btnMin = document.getElementById("btn-minimize");
  const btnMax = document.getElementById("btn-maximize");
  const btnClose = document.getElementById("btn-close");
  let isMaximized = false;
  let prevPos = {};
function focusWindow(win) {
  windows.forEach(w => {
    if (w === win) {
      w.style.zIndex = 1000;
    } else {
      w.style.zIndex = 900;
    }
  });
}

const windows = [
  document.getElementById('terminal-container'),
  document.getElementById('image-popup'),
];

windows.forEach(win => {
  win.addEventListener('mousedown', () => {
    focusWindow(win);
  });
});


const popup = document.getElementById('image-popup');

popup.style.position = 'fixed';

popup.addEventListener('mousedown', (e) => {
  if (e.target.id === 'close-popup') return;

  focusWindow(popup);

  let startX = e.clientX;
  let startY = e.clientY;

  let rect = popup.getBoundingClientRect();
  let offsetX = startX - rect.left;
  let offsetY = startY - rect.top;

  function onMouseMove(e) {
    popup.style.left = (e.clientX - offsetX) + 'px';
    popup.style.top = (e.clientY - offsetY) + 'px';
  }

  function onMouseUp() {
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
  }

  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('mouseup', onMouseUp);
});

  
  function makeDraggable(element, handle = null) {
  handle = handle || element;

  let posX = 0, posY = 0, startX = 0, startY = 0;

  handle.style.cursor = 'move';

  handle.addEventListener('mousedown', dragMouseDown);

  function dragMouseDown(e) {
    if (e.target.closest('button')) return;

    e.preventDefault();

    startX = e.clientX;
    startY = e.clientY;

    document.addEventListener('mousemove', elementDrag);
    document.addEventListener('mouseup', closeDragElement);
  }

  function elementDrag(e) {
    e.preventDefault();

    posX = startX - e.clientX;
    posY = startY - e.clientY;
    startX = e.clientX;
    startY = e.clientY;

    const rect = element.getBoundingClientRect();

    let newTop = rect.top - posY;
    let newLeft = rect.left - posX;

    const winWidth = window.innerWidth;
    const winHeight = window.innerHeight;
    const elemWidth = rect.width;
    const elemHeight = rect.height;

    if (newTop < 0) newTop = 0;
    if (newLeft < 0) newLeft = 0;
    if (newTop + elemHeight > winHeight) newTop = winHeight - elemHeight;
    if (newLeft + elemWidth > winWidth) newLeft = winWidth - elemWidth;

    element.style.top = newTop + "px";
    element.style.left = newLeft + "px";
  }

  function closeDragElement() {
    document.removeEventListener('mouseup', closeDragElement);
    document.removeEventListener('mousemove', elementDrag);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const popup = document.getElementById('image-popup');
  makeDraggable(popup);

  document.getElementById('close-popup').addEventListener('click', () => {
    popup.style.display = 'none';
  });
});

  header.addEventListener('mousedown', (e) => {
    if (e.target.closest('.btns')) return;

    let startX = e.clientX;
    let startY = e.clientY;

    let rect = terminal.getBoundingClientRect();
    let offsetX = startX - rect.left;
    let offsetY = startY - rect.top;

    function onMouseMove(e) {
      terminal.style.top = (e.clientY - offsetY) + 'px';
      terminal.style.left = (e.clientX - offsetX) + 'px';
    }

    function onMouseUp() {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    }

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  });

  btnMin.addEventListener('click', () => {
    if (terminal.style.height !== '30px') {
      terminal.dataset.oldHeight = terminal.style.height;
      terminal.style.height = '30px';
      output.style.display = 'none';
      input.style.display = 'none';
    } else {
      terminal.style.height = terminal.dataset.oldHeight || '350px';
      output.style.display = 'block';
      input.style.display = 'block';
    }
  });


  btnMax.addEventListener('click', () => {
    if (!isMaximized) {

      prevPos = {
        top: terminal.style.top,
        left: terminal.style.left,
        width: terminal.style.width,
        height: terminal.style.height
      };
      terminal.style.top = '0';
      terminal.style.left = '0';
      terminal.style.width = '100vw';
      terminal.style.height = '100vh';
      terminal.style.resize = 'none';
      isMaximized = true;
      btnMax.textContent = '❐';
    } else {
      terminal.style.top = prevPos.top;
      terminal.style.left = prevPos.left;
      terminal.style.width = prevPos.width;
      terminal.style.height = prevPos.height;
      terminal.style.resize = 'both';
      isMaximized = false;
      btnMax.textContent = '▢';
    }
  });

  btnClose.addEventListener('click', () => {
    terminal.style.display = 'none';
  });

  const startTime = Date.now();

  const commandsJSON = {
    commands: [
      {"name":"help","description":"Liste toutes les commandes","type":"dynamic","handler":"help"},
      {"name":"about","description":"À propos du terminal","type":"static","value":"Terminal web développé par Polimo."},
      {"name":"date","description":"Affiche la date et l'heure actuelle","type":"dynamic","handler":"date"},
      {"name":"time","description":"Affiche uniquement l'heure actuelle","type":"dynamic","handler":"time"},
      {"name":"echo","description":"Affiche le texte donné","type":"dynamic","handler":"echo"},
      {"name":"clear","description":"Efface l'écran","type":"dynamic","handler":"clear"},
      {"name":"uptime","description":"Temps de fonctionnement du terminal","type":"dynamic","handler":"uptime"},
      {"name":"whoami","description":"Affiche le nom d'utilisateur actuel","type":"static","value":"polimo"},
      {"name":"github","description":"Infos publiques d'un utilisateur GitHub","type":"api","handler":"github","args":["username"]},
      {"name":"google","description":"Recherche sur Google","type":"link","url":"https://www.google.com/search?q="},
      {"name":"twitter","description":"Lien vers Twitter d'un utilisateur","type":"link","url":"https://twitter.com/"},
      {"name":"joke","description":"Raconte une blague","type":"dynamic","handler":"joke"},
      {"name":"quote","description":"Affiche une citation motivante","type":"dynamic","handler":"quote"},
      {"name":"fortune","description":"Donne une prédiction amusante","type":"dynamic","handler":"fortune"},
      {"name":"calc","description":"Calculatrice simple","type":"dynamic","handler":"calc"},
      {"name":"ascii","description":"Affiche un art ASCII","type":"dynamic","handler":"ascii"},
      {"name":"dateiso","description":"Date en format ISO 8601","type":"dynamic","handler":"dateiso"},
      {"name":"day","description":"Jour du mois actuel","type":"dynamic","handler":"day"},
      {"name":"month","description":"Mois actuel","type":"dynamic","handler":"month"},
      {"name":"year","description":"Année actuelle","type":"dynamic","handler":"year"},
      {"name":"todo","description":"Liste des tâches à faire","type":"static","value":"TODO : 1. Ajouter mini-jeux 2. Améliorer terminal 3. Publier portfolio"},
      {"name":"ping","description":"Répond pong !","type":"static","value":"pong !"},
      {"name":"man","description":"Affiche le manuel d'une commande","type":"dynamic","handler":"man"},
      {"name":"dance","description":"Le terminal danse","type":"static","value":"💃 Le terminal danse... 🕺"},
      {"name":"resume","description":"Résumé de Polimo","type":"static","value":"Polimo, développeur passionné, expert Python/JS."},
      {"name":"projects","description":"Liste des projets","type":"static","value":"1. TerraClash.io  2. Polimo's Profile  3. OpenFront.io"},
      {"name":"history","description":"Liste des dernières commandes","type":"dynamic","handler":"history"},
      {"name":"cls","description":"Efface l'écran (alias clear)","type":"dynamic","handler":"clear"},
      {"name":"greet","description":"Message de bienvenue","type":"static","value":"Bonjour, Polimo ! Prêt à coder ?"},
      {"name":"theme","description":"Affiche le thème actuel","type":"static","value":"Cyberpunk vert néon"},
      {"name":"json","description":"Affiche le JSON des commandes","type":"dynamic","handler":"showJSON"},
      {"name":"ipinfo","description":"Affiche des infos IP via API (externe)","type":"api","handler":"ipinfo","args":["ip"]},
      {"name":"weatherapi","description":"Météo via API (requiert clé)","type":"api","handler":"weatherapi","args":["ville"]},
      {"name":"dog","description":"Photo aléatoire de chien via API","type":"api","handler":"dog"},
      {"name":"cat","description":"Photo aléatoire de chat via API","type":"api","handler":"cat"},
      {"name":"snake","description":"Jeu Snake (à venir)","type":"static","value":"Jeu Snake à venir..."},
      {"name":"reboot","description":"Redémarre le terminal","type":"dynamic","handler":"reboot"},
      {"name":"shutdown","description":"Éteint le terminal","type":"dynamic","handler":"shutdown"}
    ]
  };

  const history = [];
  let historyIndex = -1;

  function print(text = "", newline = true) {
    if(newline) output.textContent += text + "\n";
    else output.textContent += text;
    output.scrollTop = output.scrollHeight;
  }

  function clearScreen() {
    output.textContent = "";
  }

  const handlers = {
    help: () => {
      print("Commandes disponibles:");
      commandsJSON.commands.forEach(cmd => {
        print(`- ${cmd.name} : ${cmd.description}`);
      });
    },
    date: () => {
      print(new Date().toLocaleString());
    },
    time: () => {
      print(new Date().toLocaleTimeString());
    },
    echo: (args) => {
      if(args.length === 0) print("Usage: echo [texte]");
      else print(args.join(" "));
    },
    clear: () => clearScreen(),
    uptime: () => {
      const seconds = Math.floor((Date.now() - startTime) / 1000);
      const h = Math.floor(seconds / 3600);
      const m = Math.floor((seconds % 3600) / 60);
      const s = seconds % 60;
      print(`Uptime: ${h}h ${m}m ${s}s`);
    },
    github: async (args) => {
      if(args.length === 0) {
        print("Usage: github [username]");
        return;
      }
      const user = args[0];
      print(`Recherche GitHub pour '${user}' ...`);
      try {
        const res = await fetch(proxy + `https://api.github.com/users/${user}`);
        if (!res.ok) throw new Error("Utilisateur non trouvé");
        const data = await res.json();
        print(`Nom: ${data.name || 'N/A'}`);
        print(`Bio: ${data.bio || 'N/A'}`);
        print(`Repos publics: ${data.public_repos}`);
        print(`URL: ${data.html_url}`);
      } catch(e) {
        print("Erreur: " + e.message);
      }
    },
    joke: () => {
      const jokes = [
        "Pourquoi les programmeurs préfèrent-ils utiliser l’obscurité ? Parce que la lumière attire les bugs.",
        "Un SQL entre dans un bar, entre deux tables.",
        "Pourquoi le développeur a-t-il quitté son emploi ? Parce qu'il n'avait pas de classe."
      ];
      print(jokes[Math.floor(Math.random()*jokes.length)]);
    },
    quote: () => {
      const quotes = [
        "La seule façon de faire du bon travail est d’aimer ce que vous faites. – Steve Jobs",
        "Le succès n’est pas la clé du bonheur. Le bonheur est la clé du succès.",
        "Ne regardez pas l’horloge ; faites ce qu’elle fait, continuez."
      ];
      print(quotes[Math.floor(Math.random()*quotes.length)]);
    },
    fortune: () => {
      const fortunes = [
        "Vous allez bientôt découvrir une surprise.",
        "Une opportunité se présentera bientôt à vous.",
        "Le bonheur est à portée de main."
      ];
      print(fortunes[Math.floor(Math.random()*fortunes.length)]);
    },
    calc: (args) => {
      if(args.length === 0) {
        print("Usage: calc [expression]");
        return;
      }
      try {
        const expr = args.join("");
        if(!/^[0-9+\-*/().\s]+$/.test(expr)) {
          print("Expression invalide (caractères non autorisés).");
          return;
        }
        const result = Function('"use strict";return (' + expr + ')')();
        print(`${expr} = ${result}`);
      } catch {
        print("Erreur de calcul.");
      }
    },
    ascii: () => {
      const arts = [
        `  _____
 /  _  \\
|  /_\\  |
|  \\_/  |
 \\_____/
`,
        `(\\_/)
( •_•)
 />🍪  Voici un cookie ASCII !`
      ];
      print(arts[Math.floor(Math.random()*arts.length)]);
    },
    dateiso: () => {
      print(new Date().toISOString());
    },
    day: () => {
      print(new Date().getDate());
    },
    month: () => {
      print(new Date().getMonth() + 1);
    },
    year: () => {
      print(new Date().getFullYear());
    },
    man: (args) => {
      if(args.length === 0) {
        print("Usage: man [commande]");
        return;
      }
      const cmd = commandsJSON.commands.find(c => c.name === args[0]);
      if(!cmd) {
        print("Commande inconnue");
        return;
      }
      print(`Manuel de ${cmd.name}:`);
      print(cmd.description);
      if(cmd.type === "static") print(`Valeur statique: ${cmd.value}`);
      else if(cmd.type === "link") print(`Lien: ${cmd.url}`);
      else if(cmd.type === "api") print(`Commande API avec arguments: ${cmd.args ? cmd.args.join(", ") : "aucun"}`);
      else print(`Commande dynamique`);
    },
    history: () => {
      if(history.length === 0) print("Aucune commande en historique.");
      else history.forEach((cmd,i) => print(`${i+1}: ${cmd}`));
    },
    showJSON: () => {
      print(JSON.stringify(commandsJSON, null, 2));
    },
    ipinfo: async (args) => {
      let ip = args[0] || "";
      print(`Recherche info IP pour: ${ip || "votre IP"}`);
      try {
        const res = await fetch(proxy + `https://ipinfo.io/${ip}/json`);
        if(!res.ok) throw new Error("IP info non trouvée");
        const data = await res.json();
        print(JSON.stringify(data, null, 2));
      } catch(e) {
        print("Erreur: " + e.message);
      }
    },
    weatherapi: async (args) => {
      if(args.length === 0) {
        print("Usage: weatherapi [ville]");
        return;
      }
      const city = args.join(" ");
      print(`Recherche météo pour ${city}...`);
      print("API météo non implémentée.");
    },
    dog: async () => {
      print("Recherche photo aléatoire de chien...");
      try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await res.json();
        if(data.status === "success") {
          showImagePopup(data.message);
          print("Voici une photo de chien !");
        } else {
          print("Erreur lors de la récupération.");
        }
      } catch {
        print("Erreur réseau.");
      }
    },
    cat: async () => {
      print("Recherche photo aléatoire de chat...");
      try {
        const res = await fetch("https://api.thecatapi.com/v1/images/search");
        const data = await res.json();
        if(data.length > 0) {
          showImagePopup(data[0].url);
          print("Voici une photo de chat !");
        } else {
          print("Erreur lors de la récupération.");
        }
      } catch {
        print("Erreur réseau.");
      }
    },
    reboot: () => {
      print("Redémarrage du terminal...");
      clearScreen();
      print("Terminal redémarré.");
    },
    shutdown: () => {
      print("Extinction du terminal...");
      terminal.style.display = "none";
    }
  };

  const imagePopup = document.getElementById("image-popup");
  const popupImage = document.getElementById("popup-image");
  const closePopupBtn = document.getElementById("close-popup");

  function showImagePopup(url) {
    popupImage.src = url;
    imagePopup.style.display = "block";
  }

  closePopupBtn.addEventListener('click', () => {
    imagePopup.style.display = "none";
    popupImage.src = "";
  });

  async function handleCommand(cmdLine) {
    if(!cmdLine.trim()) return;
    print("root@technomastery > " + cmdLine);
    history.push(cmdLine);
    historyIndex = history.length;

    const parts = cmdLine.trim().split(/\s+/);
    const cmdName = parts[0].toLowerCase();
    const args = parts.slice(1);

    const cmd = commandsJSON.commands.find(c => c.name === cmdName);
    if(!cmd) {
      print(`Commande inconnue: ${cmdName}`);
      return;
    }

    if(cmd.type === "static") {
      print(cmd.value);
      return;
    } else if(cmd.type === "link") {
      const url = cmd.url + args.join("+");
      print(`Ouvrir lien: ${url}`);
      window.open(url, "_blank");
      return;
    } else if(cmd.type === "dynamic" || cmd.type === "api") {
      const handlerFunc = handlers[cmd.handler];
      if(typeof handlerFunc !== "function") {
        print("Handler non implémenté");
        return;
      }
      try {
        await handlerFunc(args);
      } catch(e) {
        print("Erreur dans la commande: " + e.message);
      }
    }
  }

  input.addEventListener("keydown", async (e) => {
    if(e.key === "Enter") {
      e.preventDefault();
      const val = input.value;
      input.value = "";
      await handleCommand(val);
    } else if(e.key === "ArrowUp") {
      if(historyIndex > 0) {
        historyIndex--;
        input.value = history[historyIndex];
      }
      e.preventDefault();
    } else if(e.key === "ArrowDown") {
      if(historyIndex < history.length - 1) {
        historyIndex++;
        input.value = history[historyIndex];
      } else {
        historyIndex = history.length;
        input.value = "";
      }
      e.preventDefault();
    }
  });

  input.focus();

  print("Bienvenue dans le terminal web. Tapez 'help' pour la liste des commandes.");
})();
