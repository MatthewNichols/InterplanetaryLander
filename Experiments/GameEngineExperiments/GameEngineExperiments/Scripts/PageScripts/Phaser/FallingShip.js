/// <reference path="../../typings/phaser/phaser.d.ts" />
define(["require", "exports", "FallingShipRunningState"], function (require, exports, runningState) {
    console.log("FallingShip");
    var FallingShip;
    (function (FallingShip_1) {
        var FallingShip = (function () {
            function FallingShip() {
                this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content');
                this.game.state.add("RunningState", runningState.GameRunningState, false);
                this.game.state.start("RunningState", true, true);
            }
            return FallingShip;
        })();
        FallingShip_1.FallingShip = FallingShip;
        var runningGame = new FallingShip();
    })(FallingShip || (FallingShip = {}));
});
//# sourceMappingURL=FallingShip.js.map