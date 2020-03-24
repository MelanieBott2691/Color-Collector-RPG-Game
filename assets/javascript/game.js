//character class for ongoing
var charOne = {
    name: "Red",
    healthPoints: 180,
    attackPower: 30,
    counterAttackPower: 10,
    maxHealth: 180
}

var charTwo = {
    name: "Blue",
    healthPoints: 100,
    attackPower: 20,
    counterAttackPower: 5,
    maxHealth: 100
}

var charThree = {
    name: "Yellow",
    healthPoints: 120,
    attackPower: 10,
    counterAttackPower: 10,
    maxHealth: 120
}

var charFour = {
    name: "Purple",
    healthPoints: 140,
    attackPower: 20,
    counterAttackPower: 10,
    maxHealth: 140
}


var firstPlayer = "";
var secondPlayer = "";
var selectedPlayer = false;

firstPlayer = charOne;
secondPlayer = charTwo;




//store org values for char

const attack = () => {
    let attackButton = document.getElementById("attack-button");
    let restartButton = document.getElementById("restart-button");
    let gameMessage = document.getElementById("game-message");

    let playerAttack = determineAttack(firstPlayer.attackPower);
    secondPlayer.healthPoints -= playerAttack;
    printToScreen();

    if (isGameOver(secondPlayer.healthPoints)) {
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
        let opponentAttack = determineAttack(secondPlayer.attackPower);
        firstPlayer.healthPoints -= opponentAttack;
        printToScreen();

        if (isGameOver(firstPlayer.healthPoints)) {
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
    firstPlayer = charOne;
    firstPlayer.healthPoints = charOne.maxHealth;
    secondPlayer = charTwo;
    secondPlayer.healthPoints = charTwo.maxHealth;
    document.getElementById("game-message").innerText = "";
    attackButton.disabled = false;
    attackButton.hidden = false;
    document.getElementById("restart-button").hidden = true;
    printToScreen();
}

const printToScreen = () => {
        document.getElementById("opponent-health").innerHTML =
            secondPlayer.healthPoints;

        document.getElementById("player-health").innerHTML =
            firstPlayer.healthPoints;

    }
    //character choices
function myFunction() {
    document.getElementById("charSelect").style.backgroundImage = src = "assets/images/red_crayon.jpg";
}
var character = document.getElementById('character');
var container = document.getElementById('container');

var left = 0;

function anim(e) {

    if (e.keyCode == 39) {
        left++;


    }
    if (e.keyCode == 37) {

    }
}
document.onkeydown = anim;