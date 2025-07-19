const websiteMod = JSON.parse(localStorage.getItem('websiteMod'));
const userDiv = document.getElementById('user');
const user = websiteMod.user;

function usernameSet() {
    const username = prompt("Please tell us your username :", "guest");
    if(username == null || username == "") {
        alert("Username incorrect.");
    } else {
        const newWbesiteMod = {
            user: username
        }
        localStorage.setItem("websiteMod", JSON.stringify(newWbesiteMod));
        location.reload();
    }
}

if(user == "dev") {
console.log("dev mod enabled !")
    userDiv.innerHTML = `
        <a href="pages/dev"><button class="buttons button-blue">DEV only</button></a><br>
    `
}

if(user == "Minheur" || user == "Xako") {
        userDiv.innerHTML = `
        <a href="pages/encode"><button class="buttons button-blue">Encoding</button></a><br>
    `
}