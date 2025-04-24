const gameInfoJson = JSON.parse(localStorage.getItem('gameInfo'));
const playerCount = gameInfoJson.playerCount;
let gameName = gameInfoJson.name;
const playerColorList = document.getElementById("players-color");
const gameID = gameInfoJson.gameID;
let allowChangeFleets = true;
const fullGameID = "nb_game_" + gameID;
const gameInfoFull = JSON.parse(localStorage.getItem(fullGameID));
let playersColor = gameInfoFull.playerColors;
if(gameInfoFull) {
    document.getElementById('gameName').textContent = gameName;
    document.getElementById('playerCount').textContent = playerCount;
    document.getElementById('playerCount2').textContent = playerCount;
} else {
    alert('ERROR : No game info found. Please create one.');
    window.location.replace('/TechnoWeb/pages/gameHub/navalBattle/game-lobby')
};
const gameStatus = gameInfoJson.gameStatus;
if(gameStatus == "Just created") {
    document.getElementById("gameStatus").textContent = "just created and joined"
};
if(gameStatus == "Loaded") {
    document.getElementById("gameStatus").textContent = "loaded";
    allowChangeFleets = false;
};
function quiteGame() {
    document.getElementById("gameStatus").textContent = "saved";
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
        gameStatus: "saved"
    };
    localStorage.setItem(fullGameID, JSON.stringify(savingData));
    // end : return to the corect page
    console.log("Saving acomplished. Going back to lobby...");
    window.location.replace('/TechnoWeb/pages/gameHub/navalBattle/game-lobby');
};
for(let i=1; i <= playerCount; i++) {
    const gameItem = document.createElement('div');
    gameItem.innerHTML = `
        <span>Player ${i} : color ${playersColor[i]} <button onclick="changeColor(${i})" class="buttons button-${playersColor[i]}">Change</button>
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
            gameStatus: "saved"
        };
        localStorage.setItem(fullGameID, JSON.stringify(savingData));
        window.location.reload();
    }
}
function changeGameName() {
    let newGameName =  document.getElementById("newGameName").value.trim();
    if(!newGameName) {
        alert("Unable to change name. Please complete the input corectly.");
        return;
    } else {
        gameName = newGameName;
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
            gameStatus: "saved"
        };
        const gameInfos = {
            name: gameName,
            gameID: gameID,
            gameStatus: gameStatus,
            playerCount : playerCount
        };
        localStorage.setItem(fullGameID, JSON.stringify(savingData));
        localStorage.setItem("gameInfo", JSON.stringify(gameInfos));
        alert("Name succefully changed name in " + gameName);
        window.location.reload();
    }
}