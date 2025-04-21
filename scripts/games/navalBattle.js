let playerNames = [];
let gameName;
let playerCount;

function switchPage() {
    window.location.replace('/TechnoMastery/pages/gameHub/navalBattle/settings')
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

    alert("Game created and saved ! You will be trasfered to the settings page soon...");
    console.log("Game saved as 'gameData' JSON : " + gameData);
    setTimeout(switchPage(), 2)
}