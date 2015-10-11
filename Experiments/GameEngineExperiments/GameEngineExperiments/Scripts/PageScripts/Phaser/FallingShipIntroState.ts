/// <reference path="../../typings/phaser/phaser.d.ts" />


export class GameIntroState extends Phaser.State {

    game: Phaser.Game;

    constructor()
    {
        super();
    }

    preload()
    {
        console.log("preload");
    }

    create()
    {
        console.log("create");
        setTimeout(() => this.game.state.start("RunningState", true, true), 10000);
    }

    update()
    {
        
    }
}