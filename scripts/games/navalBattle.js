let playerNames = [];
let gameName;
let playerCount;
document.getElementById('creatingStatus').textContent = "Game Status : Waiting for game info being subited...";

function writeStatus(content) {
    document.getElementById('creatingStatus').textContent = "Game Status : " + content;
}
function switchPage() {
    window.location.replace('/TechnoMastery/pages/gameHub/navalBattle/game-settings')
}
function status2() {
    writeStatus("Starting game info saving")
    setTimeout(writeStatus("Starting game info saving."), 1500);
    setTimeout(writeStatus("Starting game info saving.."), 1500);
    setTimeout(writeStatus("Starting game info saving..."), 1500);
    setTimeout(writeStatus("Ready ! Transfering..."), 1000);
    setTimeout(switchPage(), 3000);
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

    console.log("Game saved as 'gameData' JSON : " + gameData);
    document.getElementById('creatingStatus').textContent = "Game Status : Waiting popup from being close...";
    alert("Game created and saved ! Your game is being processed, you can close this alert and wait for being trasfered.");
    setTimeout(status2(), 2000);
}