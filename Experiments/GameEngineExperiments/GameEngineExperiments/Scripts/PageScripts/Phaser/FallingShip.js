/// <reference path="../../typings/phaser/phaser.d.ts" />
/// <reference path="../../typings/codemirror/codemirror.d.ts" />
define(["require", "exports", "FallingShipIntroState", "FallingShipRunningState"], function (require, exports, introState, runningState) {
    var FallingShip;
    (function (FallingShip_1) {
        var FallingShip = (function () {
            function FallingShip() {
                //this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content');
                this.game = new Phaser.Game("75%", 600, Phaser.AUTO, 'content');
                this.game.state.add("IntroState", introState.GameIntroState, false);
                this.game.state.add("RunningState", runningState.GameRunningState, false);
                this.game.state.start("IntroState", true, true);
                CodeMirror(document.getElementById('codeArea'), {
                    value: "console.log('hello world');",
                    mode: "javascript",
                    theme: "base16-dark",
                    lineNumbers: true
                });
            }
            return FallingShip;
        })();
        FallingShip_1.FallingShip = FallingShip;
        var runningGame = new FallingShip();
    })(FallingShip || (FallingShip = {}));
});
//# sourceMappingURL=FallingShip.js.map