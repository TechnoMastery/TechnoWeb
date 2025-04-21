document.addEventListener('DOMContentLoaded', () => {
  // Récupérer les éléments
  const startScreen = document.getElementById('startScreen');
  const difficultyScreen = document.getElementById('difficultyScreen');
  const gameScreen = document.getElementById('gameScreen');
  const endScreen = document.getElementById('endScreen');
  const startBtn = document.getElementById('startBtn');
  const difficultyBtns = document.querySelectorAll('.difficulty-btn');
  const returnButtons = document.querySelectorAll('.return-btn');
  const playAgainBtn = document.getElementById('playAgainBtn');
  const gameGrid = document.getElementById('gameGrid');
  const movesElement = document.getElementById('moves');
  const timeElement = document.getElementById('time');
  const endMessage = document.getElementById('endMessage');

  // Variables du jeu
  let gridSize = 4;
  let cards = [];
  let firstCard = null;
  let secondCard = null;
  let lockBoard = false;
  let moves = 0;
  let timer = null;
  let seconds = 0;
  let matchedPairs = 0;

  // Émojis pour les cartes
  const emojis = ['🍎', '🍊', '🍋', '🍉', '🍇', '🍓', '🍒', '🍍', 
               '🥝', '🍅', '🍆', '🌽', '🥑', '🥕', '🥔', '🍄',
               '🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼',
               '🐨', '🐯', '🦁', '🐮', '🐷', '🐸', '🐵', '🐔'];

  // Fonctions de navigation
  startBtn.addEventListener('click', () => {
      startScreen.style.display = 'none';
      difficultyScreen.style.display = 'flex';
  });

  returnButtons.forEach(btn => {
      btn.addEventListener('click', () => {
          resetGame();
          // Cacher tous les écrans
          startScreen.style.display = 'none';
          difficultyScreen.style.display = 'none';
          gameScreen.style.display = 'none';
          endScreen.style.display = 'none';
          // Afficher l'écran d'accueil
          startScreen.style.display = 'flex';
      });
  });

  playAgainBtn.addEventListener('click', () => {
      endScreen.style.display = 'none';
      difficultyScreen.style.display = 'flex';
  });

  // Sélection de la difficulté
  difficultyBtns.forEach(btn => {
      btn.addEventListener('click', function() {
          gridSize = parseInt(this.getAttribute('data-size'));
          startGame(gridSize);
          difficultyScreen.style.display = 'none';
          gameScreen.style.display = 'flex';
      });
  });

  // Démarrer le jeu
  function startGame(size) {
      resetGame();
      createBoard(size);
      startTimer();
  }

  // Créer le plateau de jeu
  function createBoard(size) {
      // Définir la taille de la grille
      gameGrid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
      
      // Sélectionner les paires d'émojis nécessaires
      const pairs = size * size / 2;
      const selectedEmojis = emojis.slice(0, pairs);
      
      // Créer un tableau avec deux de chaque emoji
      cards = [...selectedEmojis, ...selectedEmojis];
      
      // Mélanger les cartes
      shuffleArray(cards);
      
      // Effacer le contenu précédent
      gameGrid.innerHTML = '';
      
      // Créer les éléments de carte
      cards.forEach((emoji, index) => {
          const card = document.createElement('div');
          card.classList.add('card');
          card.dataset.value = emoji;
          card.dataset.index = index;
          
          // Ajuster la taille des cartes en fonction de la taille de la grille
          if (size > 6) {
              card.style.width = '60px';
              card.style.height = '60px';
              card.style.fontSize = '1.5em';
          }
          
          // Ajouter un événement de clic
          card.addEventListener('click', flipCard);
          
          gameGrid.appendChild(card);
      });
  }

  // Retourner une carte
  function flipCard() {
      if (lockBoard) return;
      if (this === firstCard) return;
      
      this.classList.add('flipped');
      this.textContent = this.dataset.value;
      
      if (!firstCard) {
          // Premier clic
          firstCard = this;
          return;
      }
      
      // Deuxième clic
      secondCard = this;
      moves++;
      movesElement.textContent = moves;
      
      checkForMatch();
  }

  // Vérifier si les cartes forment une paire
  function checkForMatch() {
      let isMatch = firstCard.dataset.value === secondCard.dataset.value;
      
      if (isMatch)