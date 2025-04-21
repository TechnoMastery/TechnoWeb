let playerNames = [];
let gameName;
let playerCount;
document.getElementById('creatingStatus').textContent = "Game Status : Waiting for game info being subited...";

function switchPage() {
    window.location.replace('/TechnoMastery/pages/gameHub/navalBattle/game-settings')
}

function createGame() {
    gameName = document.getElementById("gameName").value.trim();
    playerCount = parseInt(document.getElementById('playerCount').value);

    if(!gameName || isNaN(playerCount)) {
        alert('Please complete the 2 inputs corectely');
        return;
    }

    const gameData = {
        gameName: gameName,
        playerCount: playerCount
    };

    localStorage.setItem('gameInfos', JSON.stringify(gameData));

    alert("Game created and saved ! Your game is being processed, you can close this alert and wait for being trasfered.");
    console.log("Game saved as 'gameData' JSON : " + gameData);
    setTimeout(switchPage(), 2)
}