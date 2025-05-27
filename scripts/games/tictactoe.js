const buttonGrid = document.getElementById("button-grid");
const disabledTiles = [
    false, false, false,
    false, false, false,
    false, false, false
];

buttonGrid.innerHTML = "";
buttonGrid.style.display = "grid";
buttonGrid.style.gridTemplateColumns = "repeat(3, 3)";
buttonGrid.style.width = "fit-content";
for(let i=0; i<9; i++) {
    const button = document.createElement('button');
    button.textContent = "Select";
    button.style.height = "10px";
    button.style.width = "10px";
    button.toggleAttribute("disabled", disabledTiles[i]);
}