const gameInfoJson = JSON.parse(localStorage.getItem("gameInfo"));
const playerCount = gameInfoJson.playerCount;
const gameName = gameInfoJson.name;
const gameID = gameInfoJson.gameID;
const fullGameID = "nb_game_" + gameID;
const fullGameInfoJson = JSON.parse(localStorage.getItem(fullGameID));
const playerColors = fullGameInfoJson.playerColors;
const playerFleets = fullGameInfoJson.playerFleets;
const playerPlay = fullGameInfoJson.playerPlay;
const seaBoard = document.getElementById("seaBoard");
function saveNewDatas(enableReloadPage, gameStatus) {
    const savingData = {
        name: gameName,
        playerCount: playerCount,
        gameID: gameID,
        playerColors: [null,
            playerColors[1],
            playerColors[2],
            playerColors[3],
            playerColors[4]
        ],
        gameStatus: gameStatus,
        allowFleetsChange: false,
        playerFleets: [null,
            playerFleets[1],
            playerFleets[2],
            playerFleets[3],
            playerFleets[4]
        ]
    };
    localStorage.setItem(fullGameID, JSON.stringify(savingData));
    if(enableReloadPage) {
        window.location.reload();
    };
};
function saveGameGrid(enableReloadPage) {
    const gameGridDatas = {
        player1boats: {
            aircraftCarrier: [1, 5],
            aircraftCarrier: [],
            aircraftCarrier: [],
            aircraftCarrier: [],
            aircraftCarrier: []
        }
    }
};

document.getElementById("gameName").textContent = gameName;
function fillSeaGrid() {
    // empty grid
    seaBoard.innerHTML = "";
    seaBoard.style.display = "grid";
    seaBoard.style.gridTemplateColumns = "repeat(10, 64px)";
    seaBoard.style.width = "fit-content";
    for (let i = 1; i <= (10 * (playerCount * 10)); i++) {
        const seaTile = document.createElement('img');
        seaTile.src = "/TechnoWeb/ressources/pictures/navalBattle/sea/sea.png";
        seaTile.alt = "sea";
        seaTile.style.width = "64px";
        seaTile.style.height = "64px";
        seaTile.title = "sea";
        seaBoard.append(seaTile);
    }
};
fillSeaGrid();