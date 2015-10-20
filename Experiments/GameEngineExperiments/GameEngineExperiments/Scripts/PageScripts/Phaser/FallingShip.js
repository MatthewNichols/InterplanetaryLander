/// <reference path="../../typings/phaser/phaser.d.ts" />
/// <reference path="../../typings/codemirror/codemirror.d.ts" />
define(["require", "exports", "FallingShipIntroState", "FallingShipRunningState"], function (require, exports, introState, runningState) {
    var FallingShip;
    (function (FallingShip_1) {
        var FallingShip = (function () {
            function FallingShip() {
                this.game = new Phaser.Game("75%", 600, Phaser.AUTO, 'content');
                this.game.state.add("IntroState", introState.GameIntroState, false);
                this.game.state.add("RunningState", runningState.GameRunningState, false);
                this.game.state.start("IntroState", true, true);
                //Create an editor an hand a reference over to the RunningState    
                var editor = CodeMirror(document.getElementById('codeArea'), {
                    value: "console.log('hello world', new Date());",
                    mode: "javascript",
                    theme: "base16-dark",
                    lineNumbers: true
                });
                this.game.state.states.RunningState.editor = editor;
            }
            return FallingShip;
        })();
        FallingShip_1.FallingShip = FallingShip;
        var runningGame = new FallingShip();
        //Debug only
        window["FallingShip"] = runningGame;
    })(FallingShip || (FallingShip = {}));
});
//# sourceMappingURL=FallingShip.js.map