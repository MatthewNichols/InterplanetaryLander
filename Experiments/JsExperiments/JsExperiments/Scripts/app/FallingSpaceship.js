/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/snap/snapsvg.d.ts" />
var FallingSpaceship;
(function (FallingSpaceship) {
    var flame;
    var currentState = false;

    function init() {
        var paper = Snap("#space");
        var spaceship = new FallingSpaceship.Models.Spaceship(paper, '/contents/spaceship.svg');

        spaceship.rocketOn();

        setInterval(function () {
            return spaceship.rocketOff();
        }, 10000);
    }
    FallingSpaceship.init = init;
})(FallingSpaceship || (FallingSpaceship = {}));
//# sourceMappingURL=FallingSpaceship.js.map
