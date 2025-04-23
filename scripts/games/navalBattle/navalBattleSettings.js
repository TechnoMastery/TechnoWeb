const gameInfoJson = JSON.parse(localStorage.getItem('gameInfo'));
const playerCount = gameInfoJson.playerCount;
let playersColor = [null, "red", "green", "blue", "yellow"];
let gameName = gameInfoJson.name;
const playerColorList = document.getElementById("players-color");
const gameID = gameInfoJson.gameID;
const fullGameID = "nb_game_" + gameID;
const gameInfoFull = JSON.parse(localStorage.getItem(fullGameID));
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
        player1: playersColor[1],
        player2: playersColor[2],
        player3: playersColor[3],
        player4: playersColor[4],
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
    let newColor = prompt("Your actual color is " + playersColor[playerNb] + ". Chose one of the 3 other color, writting the name here (you can have 'red', 'green', 'yellow' or 'blue').", playersColor[playerNb]);
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
            player1: playersColor[1],
            player2: playersColor[2],
            player3: playersColor[3],
            player4: playersColor[4],
            gameStatus: "saved"
        };
        localStorage.setItem(fullGameID, JSON.stringify(savingData));
        window.location.reload();
    }
}