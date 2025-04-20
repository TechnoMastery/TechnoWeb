const valeurs = ['apple','banana','strawberry','mure','melon','lemon','ananas','kiwi','avocat','berries'];
let cartes = [...valeurs, ...valeurs]; // 10 paires
cartes = cartes.sort(() => 0.5 - Math.random()); // mélange

const grille = document.getElementById('grid');
let premiere = null;
let bloque = false;
let pairesTrouvees = 0;

// Création dynamique des cartes
cartes.forEach(val => {
  const carte = document.createElement('div');
  carte.classList.add('carte');

  carte.innerHTML = `
    <div class="inner" data-valeur="${val}">
      <div class="face verso"></div>
      <div class="face recto">${val}</div>
    </div>
  `;

  carte.addEventListener('click', () => {
    if (bloque || carte.classList.contains('reveal')) return;

    carte.classList.add('reveal');

    const currentValue = carte.querySelector('.inner').dataset.valeur;

    if (!premiere) {
      premiere = carte;
    } else {
      const premiereValeur = premiere.querySelector('.inner').dataset.valeur;
      if (premiereValeur === currentValue) {
        // C'est une paire
        premiere = null;
        pairesTrouvees++;
        if (pairesTrouvees === valeurs.length) {
          setTimeout(() => alert("🎉 Bravo, tu as trouvé toutes les paires !"), 300);
        }
      } else {
        // Pas une paire
        bloque = true;
        setTimeout(() => {
          carte.classList.remove('reveal');
          premiere.classList.remove('reveal');
          premiere = null;
          bloque = false;
        }, 1000);
      }
    }
  });

  grille.appendChild(carte);
});
