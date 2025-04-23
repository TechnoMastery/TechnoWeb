const gameInfoJson = JSON.parse(localStorage.getItem('gameInfo'));
const playerCount = gameInfoJson.playerCount;
const gameName = gameInfoJson.name;
const gameID = gameInfoJson.gameID;
const fullGameID = "nb_game_" + gameID;
if(gameInfoJson) {
    document.getElementById('gameName').textContent = gameName;
    document.getElementById('playerCount').textContent = playerCount;
    document.getElementById('playerCount2').textContent = playerCount;
} else {
    alert('ERROR : No game info found. Please create one.');
    window.location.replace('/TechnoWeb/pages/gameHub/navalBattle/game-lobby')
};
const gameStatus = gameInfoJson.gameStatus;
if(gameStatus == "Loaded") {
    document.getElementById("gameStatus").textContent = "just created and joined"
};
if(gameStatus == "Just created") {
    document.getElementById("gameStatus").textContent = "loaded"
};
function quiteGame() {
    document.getElementById("gameStatus").textContent = "saved";
    const savingData = {
        name: gameName,
        playerCount: playerCount,
        gameID: gameID,
        gameStatus: "saved"
    };
    localStorage.setItem(fullGameID, JSON.stringify(savingData));
    // end : return to the corect page
    console.log("Saving acomplished. Going back to lobby...");
    window.location.replace('/TechnoWeb/pages/gameHub/navalBattle/game-lobby');
}