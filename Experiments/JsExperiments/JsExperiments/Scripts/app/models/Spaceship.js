/// <reference path="../../typings/snap/snapsvg.d.ts" />
var FallingSpaceship;
(function (FallingSpaceship) {
    (function (Models) {
        var Spaceship = (function () {
            function Spaceship(paper, svgPath) {
                var _this = this;
                this.paper = paper;
                this.svgPath = svgPath;
                this.flameState = false;
                Snap.load(svgPath, function (fragment) {
                    paper.append(fragment);

                    _this.flame = paper.select('#layer2');
                    _this.flame.attr("display", "none");
                });
            }
            Spaceship.prototype.rocketOn = function () {
                var _this = this;
                var toggleFlame = function () {
                    _this.flameState = !_this.flameState;

                    if (_this.flameState) {
                        _this.flame.attr("display", "none");
                    } else {
                        _this.flame.attr("display", "inline");
                    }
                };

                this.flameIntervalId = setInterval(toggleFlame, 100);
            };

            Spaceship.prototype.rocketOff = function () {
                this.flame.attr("display", "none");
                this.flameState = false;
                clearInterval(this.flameIntervalId);
            };

            Spaceship.prototype.turnDegrees = function (degrees) {
            };
            return Spaceship;
        })();
        Models.Spaceship = Spaceship;
    })(FallingSpaceship.Models || (FallingSpaceship.Models = {}));
    var Models = FallingSpaceship.Models;
})(FallingSpaceship || (FallingSpaceship = {}));
//# sourceMappingURL=Spaceship.js.map
