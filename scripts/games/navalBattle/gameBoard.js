const gameInfoJson = JSON.parse(localStorage.getItem("gameInfo"));
const playerCount = gameInfoJson.playerCount;
const gameName = gameInfoJson.name;
const gameID = gameInfoJson.gameID;
const fullGameID = "nb_game_" + gameID;
const fullGameInfoJson = JSON.parse(localStorage.getItem(fullGameID));
const playerColors = fullGameInfoJson.playerColors;
const playerFleets = fullGameInfoJson.playerFleets;
const playerPlay = fullGameInfoJson.playerPlay;
const extraGameID = fullGameID + "_game_grid";
const gameGridJson = JSON.parse(localStorage.getItem(extraGameID));
const seaBoard = document.getElementById("seaBoard");
const buttonDiv = document.getElementById("button-reaveal");

let gameState = gameGridJson.gameState;
let notEmptyTiles = gameGridJson.notEmptyTiles;
// blue states
let blueStates = gameGridJson.blueStates;
let blueState1 = gameGridJson.blueState1;
let blueState2 = gameGridJson.blueState2;
let blueState3 = gameGridJson.blueState3;
let blueState4 = gameGridJson.blueState4;
let blueState5 = gameGridJson.blueState5;
let blueState6 = gameGridJson.blueState6;
let blueShips = gameGridJson.blueShips;
let blueKnown = gameGridJson.blueKnown;
// green states
let greenStates = gameGridJson.greenStates;
let greenState1 = gameGridJson.greenState1;
let greenState2 = gameGridJson.greenState2;
let greenState3 = gameGridJson.greenState3;
let greenState4 = gameGridJson.greenState4;
let greenState5 = gameGridJson.greenState5;
let greenState6 = gameGridJson.greenState6;
let greenShips = gameGridJson.greenShips;
let greenKnown = gameGridJson.greenKnown;
// purple states
let purpleStates = gameGridJson.purpleStates;
let purpleState1 = gameGridJson.purpleState1;
let purpleState2 = gameGridJson.purpleState2;
let purpleState3 = gameGridJson.purpleState3;
let purpleState4 = gameGridJson.purpleState4;
let purpleState5 = gameGridJson.purpleState5;
let purpleState6 = gameGridJson.purpleState6;
let purpleShips = gameGridJson.purpleShips;
let purpleKnown = gameGridJson.purpleKnown;
// red states
let redStates = gameGridJson.redStates;
let redState1 = gameGridJson.redState1;
let redState2 = gameGridJson.redState2;
let redState3 = gameGridJson.redState3;
let redState4 = gameGridJson.redState4;
let redState5 = gameGridJson.redState5;
let redState6 = gameGridJson.redState6;
let redShips = gameGridJson.redShips;
let redKnown = gameGridJson.redKnown;

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
        allowColorChange: false,
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
        gameState: gameState,
        notEmptyTiles: notEmptyTiles,
        blueStates: blueStates,
        blueState1: blueState1,
        blueState2: blueState2,
        blueState3: blueState3,
        blueState4: blueState4,
        blueState5: blueState5,
        blueState6: blueState6,
        blueShips: blueShips,
        blueKnown: blueKnown,
        greenStates: greenStates,
        greenState1: greenState1,
        greenState2: greenState2,
        greenState3: greenState3,
        greenState4: greenState4,
        greenState5: greenState5,
        greenState6: greenState6,
        greenShips: greenShips,
        greenKnown: greenKnown,
        purpleStates: purpleStates,
        purpleState1: purpleState1,
        purpleState2: purpleState2,
        purpleState3: purpleState3,
        purpleState4: purpleState4,
        purpleState5: purpleState5,
        purpleState6: purpleState6,
        purpleShips: purpleShips,
        purpleKnown: purpleKnown,
        redStates: redStates,
        redState1: redState1,
        redState2: redState2,
        redState3: redState3,
        redState4: redState4,
        redState5: redState5,
        redState6: redState6,
        redShips: redShips,
        redKnown: redKnown
    };
    localStorage.setItem(extraGameID, JSON.stringify(gameGridDatas));
    if(enableReloadPage) {window.location.reload()};
};
function calculateTileState(tileID) {
    if(notEmptyTiles.includes(tileID)) {
        if(blueStates.includes(tileID)) {
            if(playerColors[playerPlay] == "blue") {
                if(blueState1.includes(tileID)) {return "ships/blue-end-hor-left";};
                if(blueState2.includes(tileID)) {return "ships/blue-end-hor-right";};
                if(blueState3.includes(tileID)) {return "ships/blue-end-ver-down";};
                if(blueState4.includes(tileID)) {return "ships/blue-end-hor-up";};
                if(blueState5.includes(tileID)) {return "ships/blue-mid-hor";};
                if(blueState6.includes(tileID)) {return "ships/blue-mid-ver";};
            } else {
                if(blueState1.includes(tileID)) {return "ships/blue-end-hor-left";};
                if(blueState2.includes(tileID)) {return "ships/blue-end-hor-right";};
                if(blueState3.includes(tileID)) {return "ships/blue-end-ver-down";};
                if(blueState4.includes(tileID)) {return "ships/blue-end-hor-up";};
                if(blueState5.includes(tileID)) {return "ships/blue-mid-hor";};
                if(blueState6.includes(tileID)) {return "ships/blue-mid-ver";};
            }
        };
        if(greenStates.includes(tileID)) {
            if(greenState1.includes(tileID)) {return "ships/green-end-hor-left";};
            if(greenState2.includes(tileID)) {return "ships/green-end-hor-right";};
            if(greenState3.includes(tileID)) {return "ships/green-end-ver-down";};
            if(greenState4.includes(tileID)) {return "ships/green-end-hor-up";};
            if(greenState5.includes(tileID)) {return "ships/green-mid-hor";};
            if(greenState6.includes(tileID)) {return "ships/green-mid-ver";};
        };
        if(purpleStates.includes(tileID)) {
            if(purpleState1.includes(tileID)) {return "ships/purple-end-hor-left";};
            if(purpleState2.includes(tileID)) {return "ships/purple-end-hor-right";};
            if(purpleState3.includes(tileID)) {return "ships/purple-end-ver-down";};
            if(purpleState4.includes(tileID)) {return "ships/purple-end-hor-up";};
            if(purpleState5.includes(tileID)) {return "ships/purple-mid-hor";};
            if(purpleState6.includes(tileID)) {return "ships/purple-mid-ver";};
        };
        if(redStates.includes(tileID)) {
            if(redState1.includes(tileID)) {return "ships/red-end-hor-left";};
            if(redState2.includes(tileID)) {return "ships/red-end-hor-right";};
            if(redState3.includes(tileID)) {return "ships/red-end-ver-down";};
            if(redState4.includes(tileID)) {return "ships/red-end-hor-up";};
            if(redState5.includes(tileID)) {return "ships/red-mid-hor";};
            if(redState6.includes(tileID)) {return "ships/red-mid-ver";};
        };
    } else {
        return "sea";
    };
};
document.getElementById("gameName").textContent = gameName;
document.getElementById("playerPlay").textContent = playerPlay;
function createButton(buttonIndex) {
    const gameButton = document.createElement("div");
    if(buttonIndex == "reaveal") {
        gameButton.innerHTML = `
            <button onclick="reavealGame()" class="buttons button-${playerColors[playerPlay]}">Reaveal game</button>
        `;
        gameState = ("reavealed-player_" + playerPlay);
        document.getElementById("info1").textContent = "Hello ! Game will be reavealed when you will click this button. Make sure other players aren't watching !";
    };
    buttonDiv.append(gameButton);
};
if(gameState == "created") {createButton("reaveal"); gameState == "first_reavealing_player";};
function fillSeaGrid(reaveal) {
    // empty grid
    seaBoard.innerHTML = "";
    seaBoard.style.display = "grid";
    seaBoard.style.gridTemplateColumns = "repeat(10, 64px)";
    seaBoard.style.width = "fit-content";
    // i is the line nb
    for (let i = 1; i <= (playerCount * 10); i++) {
        // j is the colomn nb
        for(let j=1; j<=10; j++) {
            const tileID = [j, i];
            let tileType = "sea";
            if(reaveal) {tileType = calculateTileState(tileID);};
            const seaTile = document.createElement('img');
            seaTile.src = "/TechnoWeb/ressources/pictures/navalBattle/sea/" + tileType + ".png";
            seaTile.alt = tileType;
            seaTile.style.width = "64px";
            seaTile.style.height = "64px";
            seaTile.title = ("coords : " +j+ ", " +i);
            seaBoard.append(seaTile);
        }
    }
};
fillSeaGrid(false);
function reavealGame() {
    fillSeaGrid(true);
    if(gameState == "first_reavealing_player") {
        alert("Welcome ! You will have to place your boats, in the inputs. Get your mouse over sea tiles to see their coords.");
        // to continue
    };
};