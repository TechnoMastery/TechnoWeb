const fleetsIdList = ["default", "ghost", "undead"];
const gameInfoJson = JSON.parse(localStorage.getItem('gameInfo'));
const playerCount = gameInfoJson.playerCount;
let gameName = gameInfoJson.name;
const playerColorList = document.getElementById("players-color");
const gameID = gameInfoJson.gameID;
const fullGameID = "nb_game_" + gameID;
const gameInfoFull = JSON.parse(localStorage.getItem(fullGameID));
let allowChangeFleets = gameInfoFull.allowFleetsChange;
let playersColor = gameInfoFull.playerColors;
let playerFleets = gameInfoFull.playerFleets;
const gameStatus = gameInfoJson.gameStatus;
const playerPlay = gameInfoFull.playerPlay;
let allowColorChange = gameInfoFull.allowColorChange;
function saveNewDatas(enableGameInfo, enableReloadPage, gameStatus) {
    const savingData = {
        name: gameName,
        playerCount: playerCount,
        gameID: gameID,
        playerColors: [null,
            playersColor[1],
            playersColor[2],
            playersColor[3],
            playersColor[4]
        ],
        gameStatus: gameStatus,
        playerPlay: playerPlay,
        allowFleetsChange: allowChangeFleets,
        allowColorChange: allowColorChange,
        playerFleets: [null,
            playerFleets[1],
            playerFleets[2],
            playerFleets[3],
            playerFleets[4]
        ]
    };
    localStorage.setItem(fullGameID, JSON.stringify(savingData));
    if(enableGameInfo) {
        const gameInfos = {
            name: gameName,
            gameID: gameID,
            gameStatus: gameStatus,
            playerCount : playerCount
        };
        localStorage.setItem("gameInfo", JSON.stringify(gameInfos));
    };
    if(enableReloadPage) {
        window.location.reload();
    };
};
if(gameInfoFull) {
    document.getElementById('gameName').textContent = gameName;
    document.getElementById('playerCount').textContent = playerCount;
    document.getElementById('playerCount2').textContent = playerCount;
} else {
    alert('ERROR : No game info found. Please create one.');
    window.location.replace('/TechnoWeb/pages/gameHub/navalBattle/game-lobby')
};
if(allowChangeFleets == "false") {
    document.getElementById("changeFleetsButton").toggleAttribute("disabled", true);
    document.getElementById("changeFleetsButton").textContent = "Change fleets [game already started]";
};
if(!allowColorChange) {
    document.getElementById("changePlayerColor").toggleAttribute("disabled", true);
    document.getElementById("changePlayerColor").textContent = "Change [game already started]";
}
function fillFleetsSection() {
    for(let i=1; i <= gameInfoJson.playerCount; i++) {
        const playerFleetList = document.getElementById("players-fleet");
        const playerFleetItem = document.createElement('div');
        playerFleetItem.innerHTML = `
            <span>Actual fleet of player <b>${i}</b> is the <b>${playerFleets[i]}</b> one. <button class="buttons button-${playersColor[i]}" id="changeFleetsButton" onclick="selectFleet(${i})">Select my new fleet</button></span>
        `;
        playerFleetList.append(playerFleetItem);
    };
};
fillFleetsSection();
if(gameStatus == "Just created") {
    document.getElementById("gameStatus").textContent = "just created and joined"
};
if(gameStatus == "Loaded") {
    document.getElementById("gameStatus").textContent = "loaded";
    allowChangeFleets = false;
};
function quiteGame() {
    document.getElementById("gameStatus").textContent = "saved";
    saveNewDatas(false, false, "saved");
    // end : return to the corect page
    console.log("Saving acomplished. Going back to lobby...");
    window.location.replace('/TechnoWeb/pages/gameHub/navalBattle/game-lobby');
};
// fill players section
for(let i=1; i <= playerCount; i++) {
    const gameItem = document.createElement('div');
    gameItem.innerHTML = `
        <span>Player ${i} : color ${playersColor[i]} <button onclick="changeColor(${i})" id="changePlayerColor" class="buttons button-${playersColor[i]}">Change</button>
    `;
    playerColorList.append(gameItem);
};
function changeColor(playerNb) {
    let newColor = prompt("Your actual color is " + playersColor[playerNb] + ". Chose one of the 3 other color, writting the name here (you can have 'red', 'green', 'purple' or 'blue').", playersColor[playerNb]);
    if(newColor == playersColor[playerNb]) {
        alert("Nothing changed, you selected your own color !");
        return;
    } else {
        const newColorIndex = playersColor.indexOf(newColor);
        if(newColorIndex == -1 || newColorIndex == null) {
            alert("This isn't a valid color !");
            return;
        };
        const changeColor = playersColor[playerNb];
        playersColor[newColorIndex] = changeColor;
        playersColor[playerNb] = newColor;
        console.log("Change successfull !");
        alert("Your color has been succefully changed with the player " + newColorIndex);
        saveNewDatas(false, true, "Loaded");
    }
}
function changeGameName() {
    let newGameName =  document.getElementById("newGameName").value.trim();
    if(!newGameName) {
        alert("Unable to change name. Please complete the input corectly.");
        return;
    } else {
        gameName = newGameName;
        saveNewDatas(true, true, "Loaded")
        alert("Name succefully changed name in " + gameName);
    }
};
function selectFleet(playerID) {
    const newFleet = prompt("Please enter you new wanted fleet ID here (name at the end of the description) :");
    if(newFleet == playerFleets[playerID]) {
        alert("It's already your fleet ! Nothing changed !");
        return;
    };
    const fleetIndex = fleetsIdList.indexOf(newFleet);
    if(fleetIndex == -1) {
        alert("This isn't a valid fleet ID !");
        return;
    };
    playerFleets[playerID] = newFleet;
    saveNewDatas(false, true, "Loaded");
};
function joinGame() {
    saveNewDatas(false, false, "opened");
    window.location.replace("/TechnoWeb/pages/gameHub/navalBattle/game-board")
}