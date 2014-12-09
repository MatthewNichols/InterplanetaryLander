/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/snap/snapsvg.d.ts" />

module FallingSpaceship {

    export function init() {
        
        var paper = Snap("#space");
        var spaceship = new Models.Spaceship(paper, '/contents/spaceship.svg');

        $('#rocketOn').on("click", (e) => {
            spaceship.rocketOn();
        });

        $('#rocketOff').on("click", (e) =>
        {
            spaceship.rocketOff();
        });

        $('#turnCounterClock').on("click", (e) =>
        {
            spaceship.turnDegrees(-45);
        });

        $('#turnClock').on("click", (e) =>
        {
            spaceship.turnDegrees(45);
        });        
    }

} 