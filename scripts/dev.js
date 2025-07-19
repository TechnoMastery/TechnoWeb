const devDiv = document.getElementById('dev');
const devData = JSON.parse(localStorage.getElementById('devData'));
if(devData.devMod == true) {

console.log("dev mod enabled !")
    devDiv.innerHTML = `
        <a href="pages/dev"><button class="buttons button-blue">DEV only</button></a><br>
    `
}