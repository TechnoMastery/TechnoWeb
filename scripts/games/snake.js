// Déclarations globales
let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");

const gridSize = 20;
const canvasSize = 400;
const initialLength = 5;

let snake = [];
let food = {};
let direction = "RIGHT";
let score = 0;
let highScore = localStorage.getItem("highScore") ? parseInt(localStorage.getItem("highScore")) : 0;
let snakeColor = "";
let gameInterval;
let gameRunning = false;

// Affiche l'écran de début
document.getElementById("menu").style.display = "block";
document.getElementById("endScreen").style.display = "none";
document.getElementById("highScore").textContent = highScore;

// Gère les mouvements du serpent avec les touches
document.addEventListener("keydown", (e) => {
    if (gameRunning) {
        if (e.key === "ArrowUp" || e.key === "z") {
            if (direction !== "DOWN") direction = "UP";
        } else if (e.key === "ArrowDown" || e.key === "s") {
            if (direction !== "UP") direction = "DOWN";
        } else if (e.key === "ArrowLeft" || e.key === "q") {
            if (direction !== "RIGHT") direction = "LEFT";
        } else if (e.key === "ArrowRight" || e.key === "d") {
            if (direction !== "LEFT") direction = "RIGHT";
        }
    }
});

// Fonction pour démarrer le jeu
function startGame() {
    if (snakeColor === "") {
        document.getElementById("colorMessage").style.display = "block";
        return;
    }
    document.getElementById("menu").style.display = "none";
    document.getElementById("gameScreen").style.display = "block";
    document.getElementById("colorMessage").style.display = "none";
    snake = [];
    score = 0;
    direction = "RIGHT";
    for (let i = initialLength - 1; i >= 0; i--) {
        snake.push({ x: i, y: 0 });
    }
    generateFood();
    gameRunning = true;
    gameInterval = setInterval(gameLoop, 100);
}

// Fonction principale de jeu
function gameLoop() {
    updateSnakePosition();
    checkCollisions();
    drawGame();
}

// Met à jour la position du serpent
function updateSnakePosition() {
    let head = { ...snake[0] };
    if (direction === "UP") head.y -= 1;
    else if (direction === "DOWN") head.y += 1;
    else if (direction === "LEFT") head.x -= 1;
    else if (direction === "RIGHT") head.x += 1;

    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
        score += 10;
        generateFood();
    } else {
        snake.pop();
    }

    document.getElementById("currentScore").textContent = score;
    if (score > highScore) {
        highScore = score;
        localStorage.setItem("highScore", highScore);
        document.getElementById("highScore").textContent = highScore;
    }
}

// Vérifie si le serpent a heurté un mur ou lui-même
function checkCollisions() {
    let head = snake[0];

    // Collision avec les murs
    if (head.x < 0 || head.x >= canvasSize / gridSize || head.y < 0 || head.y >= canvasSize / gridSize) {
        endGame();
    }

    // Collision avec le corps du serpent
    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === head.x && snake[i].y === head.y) {
            endGame();
        }
    }
}

// Dessine le jeu (serpent, nourriture, score)
function drawGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#f0f0f0";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = i === 0 ? "black" : snakeColor;
        ctx.fillRect(snake[i].x * gridSize, snake[i].y * gridSize, gridSize, gridSize);
    }

    ctx.fillStyle = "red";
    ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);

    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText("Score: " + score, 10, 20);
    ctx.fillText("Score Max: " + highScore, 250, 20);
}

// Génère la nourriture à une position aléatoire
function generateFood() {
    food = {
        x: Math.floor(Math.random() * (canvasSize / gridSize)),
        y: Math.floor(Math.random() * (canvasSize / gridSize))
    };
}

// Met fin au jeu
function endGame() {
    clearInterval(gameInterval);
    document.getElementById("gameScreen").style.display = "none";
    document.getElementById("endScreen").style.display = "block";
    document.getElementById("finalScore").textContent = score;
    gameRunning = false;
}

// Redémarre le jeu
function restartGame() {
    document.getElementById("endScreen").style.display = "none";
    startGame();
}

// Retourne au menu
function backToMenu() {
    document.getElementById("endScreen").style.display = "none";
    document.getElementById("menu").style.display = "block";
}

// Sélectionne la couleur du serpent
function selectSnakeColor(color) {
    snakeColor = color;
    document.getElementById("selectedColorText").textContent = "Couleur sélectionnée : " + color;
}