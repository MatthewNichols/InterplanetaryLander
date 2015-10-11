/// <reference path="../../typings/phaser/phaser.d.ts" />
define(["require", "exports", "FallingShipIntroState", "FallingShipRunningState"], function (require, exports, introState, runningState) {
    var FallingShip;
    (function (FallingShip_1) {
        var FallingShip = (function () {
            function FallingShip() {
                this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content');
                this.game.state.add("IntroState", introState.GameIntroState, false);
                this.game.state.add("RunningState", runningState.GameRunningState, false);
                this.game.state.start("IntroState", true, true);
            }
            return FallingShip;
        })();
        FallingShip_1.FallingShip = FallingShip;
        var runningGame = new FallingShip();
    })(FallingShip || (FallingShip = {}));
});
//# sourceMappingURL=FallingShip.js.map