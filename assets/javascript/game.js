let player = {
    health: 100,
    power: 20
}

let opponent = {
    health: 100,
    power: 20
}

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
    player.health = 100;
    opponent.health = 100;
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
        opponent.health;

}