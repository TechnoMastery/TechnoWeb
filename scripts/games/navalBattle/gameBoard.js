const gameInfoJson = JSON.parse(localStorage.getItem("gameInfo"));
const playerCount = gameInfoJson.playerCount;
const gameName = gameInfoJson.name;
const gameID = gameInfoJson.gameID;
const fullGameID = "nb_game_" + gameID;
const fullGameInfoJson = JSON.parse(localStorage.getItem(fullGameID));
const playerColors = fullGameInfoJson.playerColors;
const playerFleets = fullGameInfoJson.playerFleets;
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
document.getElementById("gameName").textContent = gameName;
function fillSeaGrid() {
    // empty grid
    seaBoard.innerHTML = "";
    // this "for" is creating lines. 10 lignes per player
    for(let i=1; i <= (playerCount * 10); i++) {
        // this "for" is creating 10 pictures per line
        for(let j=1; j <= 10; j++) {
            const seaLineItem = document.createElement('span');
            seaLineItem.innerHTML = `
                <img src="/TechnoWeb/ressources/pictures/navalBattle/sea/sea.png" alt="sea">
            `;
            seaBoard.append(seaLineItem);
        };
        const seaLineBR = document.createElement('span');
        seaLineBR.innerHTML = `
            <br>
        `;
        seaBoard.append(seaLineBR);
    };
};
fillSeaGrid();