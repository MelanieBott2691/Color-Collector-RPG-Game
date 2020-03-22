//leave for ongoing
let player = {
    health: 100,
    power: 20
}

let opponent = {
    health: 180,
    power: 30
}


//store org values for char

const attack = () => {
    let attackButton = document.getElementById("attack-button");
    let restartButton = document.getElementById("restart-button");
    let gameMessage = document.getElementById("game-message");

    let playerAttack = determineAttack(player.power);
    opponent.health -= playerAttack;
    printToScreen();

    if (isGameOver(opponent.health)) {
        endGame("Player Won Fight");
        return;

        function picture() {
            var pic = "assets/images/red.jpg"
            document.getElementById("bigpic").src = pic.replace('90x90', '225x225');

        }
    }

    attackButton.disabled = true;
    gameMessage.innerHTML = "Opponent is about to strike!"

    setTimeout(() => {
        let opponentAttack = determineAttack(opponent.power);
        player.health -= opponentAttack;
        printToScreen();

        if (isGameOver(player.health)) {
            endGame("Opponent Won Fight");
            return;
        }
        attackButton.disabled = false;
    }, 250);
}
const endGame = (message) => {
    document.getElementById("game-message").innerText = message;
    document.getElementById("attack-button").hidden = true;
    document.getElementById("restart-button").hidden = false;

}

const determineAttack = (power) => {
    return Math.floor(Math.random() * power);
}
const isGameOver = (health) => {
    return health <= 0;
}

const restart = () => {
    let attackButton = document.getElementById("attack-button");
    player.health = 0;
    opponent.health = 0;
    document.getElementById("game-message").innerText = "";
    attackButton.disabled = false;
    attackButton.hidden = false;
    document.getElementById("restart-button").hidden = true;
    printToScreen();
}

const printToScreen = () => {
    document.getElementById("opponent-health").innerHTML =
        opponent.health;

    document.getElementById("player-health").innerHTML =
        player.health;

}