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

let placeBoatState = "null";
let allTiles = [];
let nextBoatState = "null";

let gameState = gameGridJson.gameState;
let notEmptyTiles = gameGridJson.notEmptyTiles;
let p1Known = gameGridJson.p1Known;
let p2Known = gameGridJson.p2Known;
let p3Known = gameGridJson.p3Known;
let p4Known = gameGridJson.p4Known;
let pKnown;
if(playerPlay == 1) {pKnown = p1Known};
if(playerPlay == 2) {pKnown = p2Known};
if(playerPlay == 3) {pKnown = p3Known};
if(playerPlay == 4) {pKnown = p4Known};
// blue states
let blueStates = gameGridJson.blueStates;
let blueState1 = gameGridJson.blueState1;
let blueState2 = gameGridJson.blueState2;
let blueState3 = gameGridJson.blueState3;
let blueState4 = gameGridJson.blueState4;
let blueState5 = gameGridJson.blueState5;
let blueState6 = gameGridJson.blueState6;
let blueShips = gameGridJson.blueShips;
// green states
let greenStates = gameGridJson.greenStates;
let greenState1 = gameGridJson.greenState1;
let greenState2 = gameGridJson.greenState2;
let greenState3 = gameGridJson.greenState3;
let greenState4 = gameGridJson.greenState4;
let greenState5 = gameGridJson.greenState5;
let greenState6 = gameGridJson.greenState6;
let greenShips = gameGridJson.greenShips;
// purple states
let purpleStates = gameGridJson.purpleStates;
let purpleState1 = gameGridJson.purpleState1;
let purpleState2 = gameGridJson.purpleState2;
let purpleState3 = gameGridJson.purpleState3;
let purpleState4 = gameGridJson.purpleState4;
let purpleState5 = gameGridJson.purpleState5;
let purpleState6 = gameGridJson.purpleState6;
let purpleShips = gameGridJson.purpleShips;
// red states
let redStates = gameGridJson.redStates;
let redState1 = gameGridJson.redState1;
let redState2 = gameGridJson.redState2;
let redState3 = gameGridJson.redState3;
let redState4 = gameGridJson.redState4;
let redState5 = gameGridJson.redState5;
let redState6 = gameGridJson.redState6;
let redShips = gameGridJson.redShips;

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
        p1Known: p1Known,
        p2Known: p2Known,
        p3Known: p3Known,
        p4Known: p4Known,
        notEmptyTiles: notEmptyTiles,
        blueStates: blueStates,
        blueState1: blueState1,
        blueState2: blueState2,
        blueState3: blueState3,
        blueState4: blueState4,
        blueState5: blueState5,
        blueState6: blueState6,
        blueShips: blueShips,
        greenStates: greenStates,
        greenState1: greenState1,
        greenState2: greenState2,
        greenState3: greenState3,
        greenState4: greenState4,
        greenState5: greenState5,
        greenState6: greenState6,
        greenShips: greenShips,
        purpleStates: purpleStates,
        purpleState1: purpleState1,
        purpleState2: purpleState2,
        purpleState3: purpleState3,
        purpleState4: purpleState4,
        purpleState5: purpleState5,
        purpleState6: purpleState6,
        purpleShips: purpleShips,
        redStates: redStates,
        redState1: redState1,
        redState2: redState2,
        redState3: redState3,
        redState4: redState4,
        redState5: redState5,
        redState6: redState6,
        redShips: redShips
    };
    localStorage.setItem(extraGameID, JSON.stringify(gameGridDatas));
    if(enableReloadPage) {window.location.reload()};
};
function calculateTileState(tileID) {
    if(notEmptyTiles.includes(tileID)) {
        if(blueStates.includes(tileID)) {
            if((playerColors[playerPlay] == "blue") || (pKnown.includes(tileID))) {
                if(blueState1.includes(tileID)) {return "ships/blue-end-hor-left";};
                if(blueState2.includes(tileID)) {return "ships/blue-end-hor-right";};
                if(blueState3.includes(tileID)) {return "ships/blue-end-ver-down";};
                if(blueState4.includes(tileID)) {return "ships/blue-end-hor-up";};
                if(blueState5.includes(tileID)) {return "ships/blue-mid-hor";};
                if(blueState6.includes(tileID)) {return "ships/blue-mid-ver";};
            };
        };
        if(greenStates.includes(tileID)) {
            if((playerColors[playerPlay] == "green") || (pKnown.includes(tileID))) {
                if(greenState1.includes(tileID)) {return "ships/green-end-hor-left";};
                if(greenState2.includes(tileID)) {return "ships/green-end-hor-right";};
                if(greenState3.includes(tileID)) {return "ships/green-end-ver-down";};
                if(greenState4.includes(tileID)) {return "ships/green-end-hor-up";};
                if(greenState5.includes(tileID)) {return "ships/green-mid-hor";};
                if(greenState6.includes(tileID)) {return "ships/green-mid-ver";};
            };
        };
        if(purpleStates.includes(tileID)) {
            if((playerColors[playerPlay] == "purple") || (pKnown.includes(tileID))) {
                if(purpleState1.includes(tileID)) {return "ships/purple-end-hor-left";};
                if(purpleState2.includes(tileID)) {return "ships/purple-end-hor-right";};
                if(purpleState3.includes(tileID)) {return "ships/purple-end-ver-down";};
                if(purpleState4.includes(tileID)) {return "ships/purple-end-hor-up";};
                if(purpleState5.includes(tileID)) {return "ships/purple-mid-hor";};
                if(purpleState6.includes(tileID)) {return "ships/purple-mid-ver";};
            };
        };
        if(redStates.includes(tileID)) {
            if((playerColors[playerPlay] == "red") || (pKnown.includes(tileID))) {
                if(redState1.includes(tileID)) {return "ships/red-end-hor-left";};
                if(redState2.includes(tileID)) {return "ships/red-end-hor-right";};
                if(redState3.includes(tileID)) {return "ships/red-end-ver-down";};
                if(redState4.includes(tileID)) {return "ships/red-end-hor-up";};
                    if(redState5.includes(tileID)) {return "ships/red-mid-hor";};
                if(redState6.includes(tileID)) {return "ships/red-mid-ver";};
            };
        };
    } else {
        return "sea";
    };
};
document.getElementById("gameName").textContent = gameName;
document.getElementById("playerPlay").textContent = playerPlay;
function createButton(buttonIndex) {
    const gameButton = document.createElement("div");
    buttonDiv.innerHTML = "";
    if(buttonIndex == "reaveal") {
        gameButton.innerHTML = `
            <button onclick="reavealGame()" class="buttons button-${playerColors[playerPlay]}">Reaveal game</button>
        `;
        gameState = ("reavealed-player_" + playerPlay);
        document.getElementById("info1").textContent = "Hello ! Game will be reavealed when you will click this button. Make sure other players aren't watching !";
    };
    if(buttonIndex == "place_boat") {
        gameButton.innerHTML = `
        <button class="buttons button-${playerColors[playerPlay]}" onclick="placeBoat()">Place the boat "${placeBoatState}"</button>
        `;
        document.getElementById("info1").textContent = "You have to place your boats. patrol boat is 2 tile, the submarine and destroyer are 3, the battleship is 4 and the aicraft carrier is 5.";
    }
    buttonDiv.append(gameButton);
};
if(gameState == "created") {createButton("reaveal"); gameState = "first_reavealing_player";};
function fillSeaGrid(reaveal) {
    // empty grid
    seaBoard.innerHTML = "";
    allTiles = [];
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
            allTiles.push(tileID);
        }
    }
};
function reavealGame() {
    fillSeaGrid(true);
    if(gameState == "first_reavealing_player") {
        alert("Welcome ! You will have to place your boats, in the inputs. Get your mouse over sea tiles to see their coords.");
        gameState = "placing_boats";
        placeBoatState = "patrol_boat";
        createButton("place_boat");
    };
};
function pushToRightTab(tabId, tileId) {
    notEmptyTiles.push([tileId]);
    if(playerColors[playerPlay] == "blue") {
        blueStates.push(tileId);
        if(tabId == 1) {blueState1.push(tileId);};
        if(tabId == 2) {blueState2.push(tileId);};
        if(tabId == 3) {blueState3.push(tileId);};
        if(tabId == 4) {blueState4.push(tileId);};
        if(tabId == 5) {blueState5.push(tileId);};
        if(tabId == 6) {blueState6.push(tileId);};
    };
    if(playerColors[playerPlay] == "green") {
        greenStates.push(tileId);
        if(tabId == 1) {greenState1.push(tileId);};
        if(tabId == 2) {greenState2.push(tileId);};
        if(tabId == 3) {greenState3.push(tileId);};
        if(tabId == 4) {greenState4.push(tileId);};
        if(tabId == 5) {greenState5.push(tileId);};
        if(tabId == 6) {greenState6.push(tileId);};
    };
    if(playerColors[playerPlay] == "purple") {
        purpleStates.push(tileId);
        if(tabId == 1) {purpleState1.push(tileId);};
        if(tabId == 2) {purpleState2.push(tileId);};
        if(tabId == 3) {purpleState3.push(tileId);};
        if(tabId == 4) {purpleState4.push(tileId);};
        if(tabId == 5) {purpleState5.push(tileId);};
        if(tabId == 6) {purpleState6.push(tileId);};
    };
    if(playerColors[playerPlay] == "red") {
        redStates.push(tileId);
        if(tabId == 1) {redState1.push(tileId);};
        if(tabId == 2) {redState2.push(tileId);};
        if(tabId == 3) {redState3.push(tileId);};
        if(tabId == 4) {redState4.push(tileId);};
        if(tabId == 5) {redState5.push(tileId);};
        if(tabId == 6) {redState6.push(tileId);};
    };
};
function nextPlayer() {
    if(playerPlay < playerCount) {playerPlay = playerPlay+1;}
    else if(playerPlay == playrecount) {playerPlay = 1;}
    else alert("An error appended. This game can be corupted. Please make a bug report.");
};
function placeBoat() {
    let boatShape;
    let isCorrect = false;
    alert("We are going to ask you values. You can find them by hovering tiles. To cancel, use 'null' as answer. The start tile have to be the left one or the top one. The end one have to be the right one or the bottom one. You can have vertical & horizontal ships.");
    alert("The boat you have to place is the " + placeBoatState +".");
    let coord1 = prompt("Hello ! Please enter the first number of the begin tile of your boat. Keep null to cancel", "null");
    if(coord1 == "null") {return;};
    let coord2 = prompt("Hello ! Please enter the second number of the begin tile of your boat. Keep null to cancel", "null");
    if(coord2 == "null") {return;};
    let startTile = [coord1, coord2];
    if(!(allTiles.some(t => t[0] === startTile[0] && t[1] === startTile[1]))) {alert("Your values arn't correct ! Try again."); return;};
    let coord3 = prompt("Hello ! Please enter the first number of the end tile of your boat. Keep null to cancel", "null");
    if(coord3 == "null") {return;};
    let coord4 = prompt("Hello ! Please enter the second number of the end tile of your boat. Keep null to cancel", "null");
    if(coord4 == "null") {return;};
    let endTile = [coord3, coord4];
    if(!(allTiles.some(t => t[0] === endTile[0] && t[1] === endTile[1]))) {alert("Your values arn't correct ! Try again."); return;};
    if(placeBoatState == "patrol_boat") {
        const newCoord1 = coord1+1;
        const newCoord2 = coord2+1;
        if([newCoord1, coord2] == endTile) {
            boatShape = "hor";
            isCorrect = true;
        };
        if([coord1, newCoord2] == endTile) {
            boatShape = "ver";
            isCorrect = true;
        };
        nextBoatState = "submarine";
    };
    if(placeBoatState == "submarine" || placeBoatState == "destroyer") {
        const newCoord1 = coord1+3;
        const newCoord2 = coord2+3;
        if([newCoord1, coord2] == endTile) {
            boatShape = "hor";
            isCorrect = true;
        };
        if([coord1, newCoord2] == endTile) {
            boatShape = "ver";
            isCorrect = true;
        };
        if(placeBoatState == "submarine") {nextBoatState = "destroyer"}
        else {nextBoatState = "battleship"};
    };
    if(placeBoatState == "battleship") {
        const newCoord1 = coord1+4;
        const newCoord2 = coord2+4;
        if([newCoord1, coord2] == endTile) {
            boatShape = "hor";
            isCorrect = true;
        };
        if([coord1, newCoord2] == endTile) {
            boatShape = "ver";
            isCorrect = true;
        };
        nextBoatState = "aircraft_carrier";
    };
    if(placeBoatState == "aircraft_carrier") {
        const newCoord1 = coord1+5;
        const newCoord2 = coord2+5;
        if([newCoord1, coord2] == endTile) {
            boatShape = "hor";
            isCorrect = true;
        };
        if([coord1, newCoord2] == endTile) {
            boatShape = "ver";
            isCorrect = true;
        };
        nextBoatState = "end";
    };
    if(!isCorrect) {
        alert("Something went wrong... It look like your coordinates arn't matching anything. Try another !");
        return;
    };
    if(boatShape = "hor") {
        for(let i=coord1; i <= coord3; i++) {
            let tabID;
            if(i==coord1) {tabID = 2}
            else if(i==coord3) {tabID = 1}
            else {tabID = 5};
            pushToRightTab(tabID, [i, coord2]);
        };
    };
    if(boatShape = "ver") {
        for(let i=coord2; i <= coord4; i++) {
            let tabID;
            if(i==coord2) {tabID = 3}
            else if(i==coord4) {tabID = 4}
            else {tabID = 6};
            pushToRightTab(tabID, [coord1, i]);
        };
    };
    fillSeaGrid(true);
    if(nextBoatState !== "end") {placeBoatState = nextBoatState; createButton("place_boat");}
    else {
        alert("You placed all your boats ! Your turn is ended.");
        nextPlayer();
    };
};