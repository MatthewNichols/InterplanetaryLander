/// <reference path="../../typings/phaser/phaser.d.ts" />
/// <reference path="../../typings/codemirror/codemirror.d.ts" />

//import Phaser = require("phaser");
import introState = require("FallingShipIntroState");
import runningState = require("FallingShipRunningState");

module FallingShip {

    export class FallingShip {
        game: Phaser.Game;
        
        constructor()
        {
            this.game = new Phaser.Game("75%", 600, Phaser.AUTO, 'content');
            this.game.state.add("IntroState", introState.GameIntroState, false);
            this.game.state.add("RunningState", runningState.GameRunningState, false);
            this.game.state.start("IntroState", true, true);
        
            //Create an editor an hand a reference over to the RunningState    
            let editor = CodeMirror(document.getElementById('codeArea'),
            {
                value: "console.log('hello world', new Date());",
                mode: "javascript",
                theme: "base16-dark",
                lineNumbers: true
            });

            this.game.state.states.RunningState.editor = editor;
        }
    }

    var runningGame = new FallingShip();

    //Debug only
    window["FallingShip"] = runningGame;

}

