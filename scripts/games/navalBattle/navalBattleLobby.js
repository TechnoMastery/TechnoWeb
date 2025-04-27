let playerNames = [];
let gameName;
let gameInfos = JSON.parse(localStorage.getItem("gameInfos"));
const gamesList = document.getElementById('games-list');
let gamesListJson = JSON.parse(localStorage.getItem('gamesList'));
let playerCount;
document.getElementById('creatingStatus').textContent = "Game Status : Waiting for game info being submited...";
localStorage.removeItem("gameInfo")

if(!gamesListJson) {
    console.log("gamesList file not existing. Creating one...")
    const writeGameLists = {
        gameCount: 0,
        totalGameCount: 0,
        activeGameCount: []
    };
    localStorage.setItem("gamesList", JSON.stringify(writeGameLists))
    gamesListJson = JSON.parse(localStorage.getItem("gamesList"))
};

function fillGamesList() {
    if(gamesListJson && gamesListJson.gameCount >= 1) {
        for(let i=1; i <= gamesListJson.gameCount; i++) {
            const j = i-1;
            const getGameNb = gamesListJson.activeGameCount[j];
            const getGameId = "nb_game_" + getGameNb;
            const gameData = JSON.parse(localStorage.getItem(getGameId));
            const gameItem = document.createElement('div');
            gameItem.innerHTML = `
                <span>Game ${getGameNb} : <b>${gameData.name}</b> with <b>${gameData.playerCount}</b> players. <button class="buttons button-green" onclick="loadGame(${getGameNb})">Load game</button> <button class="buttons button-red" onclick="deleteGame(${getGameNb})">Delete game (permanent)</button></span>
            `;
            gamesList.prepend(gameItem);
        }
    } else {
        document.getElementById('games-list').textContent = "You have no games ! Create one !"
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

    if(gamesListJson.gameCount >= 10) {
        console.error("Save limit block us from creating a new one.");
        alert("You have to much saves (10 or more). You can't create a new one. Try after deleting some of them.");
        return;
    }
    if(!gameName || isNaN(playerCount) || playerCount < 2 || playerCount > 4) {
        console.error("Game infos hasn't been completed corectrly.")
        alert('Please complete the 2 inputs corectely');
        return;
    };
    const gameStatus = "Just created";
    const newGameNb = gamesListJson.totalGameCount +1;
    const gameCount = gamesListJson.gameCount+1;
    let activeGameCount = gamesListJson.activeGameCount;
    activeGameCount.push(newGameNb);
    const newGamesCount = {
        gameCount: gameCount,
        totalGameCount: newGameNb,
        activeGameCount: activeGameCount
    };
    const newGameId = "nb_game_" + newGameNb;
    const gameData = {
        name: gameName,
        playerCount: playerCount,
        gameID: newGameNb,
        playerColors: [null,
            "red",
            "green",
            "blue",
            "purple"
        ],
        gameStatus: gameStatus,
        playerPlay: 1,
        allowFleetsChange: "true",
        allowColorChange: true,
        playerFleets: [null,
            "default",
            "default",
            "default",
            "default"
        ]
    };
    const gameInfos = {
        name: gameName,
        gameID: newGameNb,
        gameStatus: gameStatus,
        playerCount : playerCount
    };
    const gameGridDatas = {
        gameState: "created",
        p1Known: [],
        p2Known: [],
        p3Known: [],
        p4Known: [],
        notEmptyTiles: [],
        blueStates: [],
        blueState1: [],
        blueState2: [],
        blueState3: [],
        blueState4: [],
        blueState5: [],
        blueState6: [],
        blueShips: [1, 2, 3, 4, 5],
        greenStates: [],
        greenState1: [],
        greenState2: [],
        greenState3: [],
        greenState4: [],
        greenState5: [],
        greenState6: [],
        greenShips: [1, 2, 3, 4, 5],
        purpleStates: [],
        purpleState1: [],
        purpleState2: [],
        purpleState3: [],
        purpleState4: [],
        purpleState5: [],
        purpleState6: [],
        purpleShips: [1, 2, 3, 4, 5],
        redStates: [],
        redState1: [],
        redState2: [],
        redState3: [],
        redState4: [],
        redState5: [],
        redState6: [],
        redShips: [1, 2, 3, 4, 5]
    };
    const extraGameID = newGameId +"_game_grid";
    localStorage.setItem(extraGameID, JSON.stringify(gameGridDatas));
    const gameGrid = { // todo
    };
    localStorage.setItem("gamesList", JSON.stringify(newGamesCount));
    localStorage.setItem(newGameId, JSON.stringify(gameData));
    localStorage.setItem("gameInfo", JSON.stringify(gameInfos));

    console.log("Game saved as 'gameData' JSON : " + gameData);
    document.getElementById('creatingStatus').textContent = "Game Status : Waiting popup from being close...";
    console.log("Sucefully created game with ID " + newGameId +".");
    alert("Game created and saved ! Your game is being processed, you can close this alert and wait for being trasfered.");
    setTimeout(status2(), 2000);
}

function loadGame(gameNB) {
    const gameID = "nb_game_" + gameNB;
    const gameInfosExtr = JSON.parse(localStorage.getItem(gameID));
    if(!gameInfosExtr) {
        console.error("Loading game with id " + gameID + " went wrong.");
        alert("Something went wrong, this game look to have no data files... We can't load it.");
        return;
    };
    const gameName = gameInfosExtr.name;
    const gamePlayerCount = gameInfosExtr.playerCount;
    const gameStatus = "Loaded";
    const gameInfos = {
        name: gameName,
        gameID: gameNB,
        gameStatus: gameStatus,
        playerCount : gamePlayerCount
    };
    localStorage.setItem("gameInfo", JSON.stringify(gameInfos));
    console.log("Succefully loaded game with ID " + gameID + ".");
    alert("Game loaded. You will be transfered when you close this popup.");
    switchPage();
}

function deleteGame(gameNb) {
    const deleteGameId = "nb_game_" + gameNb;
    const extraGameID = deleteGameId + "_game_grid";
    localStorage.removeItem(deleteGameId);
    localStorage.removeItem(extraGameID);
    const gameCount = gamesListJson.gameCount-1;
    const totalGameCount = gamesListJson.totalGameCount;
    let newActiveGameCount = gamesListJson.activeGameCount;
    const deleteGameIndex = newActiveGameCount.indexOf(gameNb);
    if(deleteGameIndex == -1) {
        console.error("Deleting game with ID " + deleteGameId + " went wrong.");
        alert("ERROR : game not found. Try F5 or ctrl + F5, and retry.");
        return;
    };
    newActiveGameCount.splice(deleteGameIndex, 1);
    const deleteNewGamesCount = {
        gameCount: gameCount,
        totalGameCount: totalGameCount,
        activeGameCount: newActiveGameCount
    };
    localStorage.setItem("gamesList", JSON.stringify(deleteNewGamesCount));
    location.reload();
}
function resetALL() {
    const deleteVerif = prompt("Are you sure you want to delete all ?", "Enter NavalBattle to continue");
    if(deleteVerif !== "NavalBattle") {
        console.log("Canceled delection.")
        alert("Reset of the game canceled.");
        return;
    }
    if(gamesListJson) {
        for(let i = 1; i <= gamesListJson.gameCount; i++) {
            const j = i-1;
            const gameID = gamesListJson.activeGameCount[j];
            const fullGameID = "nb_game_" + gameID;
            const extraGameID = fullGameID + "_game_grid";
            localStorage.removeItem(fullGameID);
            localStorage.removeItem(extraGameID);
        };
        localStorage.removeItem('gamesList');
    };
    if(gameInfos) {
        localStorage.removeItem('gameInfo');
    };
    console.log("ALL NAVAL BATTLE DATA DELETED")
    alert("All naval battle data has been deleted. No data about this game is now stored in your browser.");
    window.location.replace("/TechnoWeb/pages/gameHub/navalBattle/")
}