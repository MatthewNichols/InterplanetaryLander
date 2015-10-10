/// <reference path="../../typings/phaser/phaser.d.ts" />

console.log("FallingShip");

//import Phaser = require("phaser");
import runningState = require("FallingShipRunningState");

module FallingShip {

    export class FallingShip {
        game: Phaser.Game;

        constructor()
        {
            this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content');
            this.game.state.add("RunningState", runningState.GameRunningState, false);
            this.game.state.start("RunningState", true, true);
        }
    }

    var runningGame = new FallingShip();

    //$('#pause').click(() => game.physics.p2["isPaused"] = true);
    //$('#resume').click(() => game.physics.p2["isPaused"] = false);

//});
}

