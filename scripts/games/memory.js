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
    const bestScoreElement = document.getElementById('bestScore');

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
    let bestScore = Infinity;
    let gameStarted = false;

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
            startScreen.style.display = 'flex';
            difficultyScreen.style.display = 'none';
            gameScreen.style.display = 'none';
            endScreen.style.display = 'none';
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
    }

    // Créer le plateau de jeu
    function createBoard(size) {
        gameGrid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        
        const pairs = size * size / 2;
        const selectedEmojis = emojis.slice(0, pairs);
        
        cards = [...selectedEmojis, ...selectedEmojis];
        shuffleArray(cards);
        
        gameGrid.innerHTML = '';
        
        cards.forEach((emoji, index) => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.dataset.value = emoji;
            card.dataset.index = index;
            
            if (size > 6) {
                card.style.width = '60px';
                card.style.height = '60px';
                card.style.fontSize = '1.5em';
            }
            
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
            firstCard = this;
            if (!gameStarted) {
                startTimer();
                gameStarted = true;
            }
            return;
        }
        
        secondCard = this;
        moves++;
        movesElement.textContent = moves;
        
        checkForMatch();
    }

    // Vérifier si les cartes forment une paire
    function checkForMatch() {
        let isMatch = firstCard.dataset.value === secondCard.dataset.value;
        
        if (isMatch) {
            disableCards();
            matchedPairs++;
            
            if (matchedPairs === gridSize * gridSize / 2) {
                endGame();
            }
        } else {
            unflipCards();
        }
    }

    // Désactiver les cartes correspondantes
    function disableCards() {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
        
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
        
        resetTurn();
    }

    // Retourner les cartes non correspondantes
    function unflipCards() {
        lockBoard = true;
        
        setTimeout(() => {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            firstCard.textContent = '';
            secondCard.textContent = '';
            
            resetTurn();
        }, 1000);
    }

    // Réinitialiser le tour
    function resetTurn() {
        firstCard = null;
        secondCard = null;
        lockBoard = false;
    }

    // Mélanger le tableau de cartes
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Démarrer le chronomètre
    function startTimer() {
        seconds = 0;
        timeElement.textContent = seconds;
        clearInterval(timer);
        timer = setInterval(() => {
            seconds++;
            timeElement.textContent = seconds;
        }, 1000);
    }

    // Fin du jeu
    function endGame() {
        clearInterval(timer);
        
        if (seconds < bestScore) {
            bestScore = seconds;
            bestScoreElement.textContent = `${bestScore}s`;
        }
        
        setTimeout(() => {
            gameScreen.style.display = 'none';
            endScreen.style.display = 'flex';
            endMessage.innerHTML = `
                Vous avez terminé en ${seconds} secondes avec ${moves} coups!<br>
                ${seconds === bestScore ? 'Nouveau meilleur score !' : `Votre meilleur score: ${bestScore}s`}
            `;
            gameStarted = false;
        }, 1000);
    }

    // Réinitialiser le jeu
    function resetGame() {
        clearInterval(timer);
        firstCard = null;
        secondCard = null;
        lockBoard = false;
        moves = 0;
        seconds = 0;
        matchedPairs = 0;
        gameStarted = false;
        movesElement.textContent = moves;
        timeElement.textContent = seconds;
    }
});