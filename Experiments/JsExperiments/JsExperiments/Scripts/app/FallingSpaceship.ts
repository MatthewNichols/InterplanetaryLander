/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/snap/snapsvg.d.ts" />

module FallingSpaceship {

    var flame: any;
    var currentState = false;

    export function init() {
        
        var paper = Snap("#space");
        var spaceship = new Models.Spaceship(paper, '/contents/spaceship.svg');

        spaceship.rocketOn();

        setInterval(() => spaceship.rocketOff(), 10000);
    }

} 