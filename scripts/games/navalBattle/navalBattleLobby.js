let playerNames = [];
let gameName;
const gamesList = document.getElementById('games-list');
let gamesListJson = JSON.parse(localStorage.getItem('gamesList'));
let playerCount;
document.getElementById('creatingStatus').textContent = "Game Status : Waiting for game info being submited...";

if(!gamesListJson) {
    const writeGameLists = {
        gameCount: 0
    }
    localStorage.setItem("gamesList", JSON.stringify(writeGameLists))
    gamesListJson = JSON.parse(localStorage.getItem("gamesList"))
}

function fillGamesList() {
    if(gamesListJson) {
        for(let i=1; i <= gamesListJson.gameCount; i++) {
            const getGameId = "nb_game_" + i;
            const gameData = JSON.parse(localStorage.getItem(getGameId));
            const gameItem = document.createElement('div');
            gameItem.innerHTML = `
                <span>Game ${i} : ${gameData.name} with ${gameData.playerCount} players.</span>
            `;
            gamesList.prepend(gameItem);
        }
    }
};
fillGamesList();

function writeStatus(content) {
    document.getElementById('creatingStatus').textContent = "Game Status : " + content;
}
function switchPage() {
    window.location.replace('/TechnoWeb/pages/gameHub/navalBattle/game-settings')
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
    };

    const gameData = {
        gameName: gameName,
        playerCount: playerCount
    };
    localStorage.setItem('gameInfos', JSON.stringify(gameData));

    let newGamesListJson;
    if(gamesListJson) {
        newGamesListJson = JSON.parse(localStorage.getItem('gamesList'));
        newGamesListJson.gameCount = newGamesListJson.gameCount +1;
        const newGameId = newGamesListJson.gameCount;
        newGamesListJson[newGameId] = {
        name: gameName,
        playerCount: playerCount
        };
    } else {
        newGamesListJson = {
            gameCount: 1,
            "1": {
                name: gameName,
                playerCount: playerCount
            }
        }
    };
    localStorage.setItem('gamesList', JSON.stringify(newGamesListJson));

    console.log("Game saved as 'gameData' JSON : " + gameData);
    document.getElementById('creatingStatus').textContent = "Game Status : Waiting popup from being close...";
    alert("Game created and saved ! Your game is being processed, you can close this alert and wait for being trasfered.");
    setTimeout(status2(), 2000);
}