const gameInfoJson = JSON.parse(localStorage.getItem('gameInfo'));
const playerCount = gameInfoJson.playerCount;
const gameName = gameInfoJson.gameName;
if(gameInfoJson) {
    document.getElementById('gameName').textContent = gameName;
    document.getElementById('playerCount').textContent = playerCount;
} else {
    alert('ERROR : No game info found. Please create one.');
    window.location.replace('/TechnoWeb/pages/gameHub/navalBattle/game-lobby')
}