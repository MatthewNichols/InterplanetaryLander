/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/snap/snapsvg.d.ts" />
var FallingSpaceship;
(function (FallingSpaceship) {
    function init() {
        var paper = Snap("#space");
        var spaceship = new FallingSpaceship.Models.Spaceship(paper, '/contents/spaceship.svg');

        $('#rocketOn').on("click", function (e) {
            spaceship.rocketOn();
        });

        $('#rocketOff').on("click", function (e) {
            spaceship.rocketOff();
        });

        $('#turnCounterClock').on("click", function (e) {
            spaceship.turnDegrees(-45);
        });

        $('#turnClock').on("click", function (e) {
            spaceship.turnDegrees(45);
        });
    }
    FallingSpaceship.init = init;
})(FallingSpaceship || (FallingSpaceship = {}));
//# sourceMappingURL=FallingSpaceship.js.map
