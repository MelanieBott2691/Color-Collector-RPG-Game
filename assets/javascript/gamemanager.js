//creating methods for objects
//create set game start method that will call on two other methods when we start the game

let GameManager = {
    setGameStart: function(classType) {
        //create two extra methods
        this.resetPlayer(classType);
        this.setPreFight();
    },
    resetPlayer: function(classType) {
        //create switch condition to set the char equal to the one chosen
        switch (classType) {
            case "red":
                player = new Player(classType);
        }
    },
    //set the first stage
    setPreFight: function() {

    }

}