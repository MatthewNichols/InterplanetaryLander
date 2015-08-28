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
                this.rocketAlreadyOn = false;
                Snap.load(svgPath, function (fragment) {
                    //console.log(fragment);
                    window["fragment"] = fragment;
                    paper.append(fragment);

                    //Set member properties to different parts of the imported SVG.
                    _this.totalShip = paper.select('#totalShip');
                    _this.flame = paper.select('#flame');

                    //console.log(this.flame);
                    _this.flame.attr("display", "none");
                });
            }
            Spaceship.prototype.rocketOn = function () {
                var _this = this;
                if (this.rocketAlreadyOn) {
                    return;
                }

                this.rocketAlreadyOn = true;

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
                this.rocketAlreadyOn = false;
            };

            Spaceship.prototype.turnDegrees = function (degrees) {
                var transformString = 'r' + degrees + ',124,150';
                console.log(transformString);
                this.totalShip.animate({ transform: transformString }, 1000);
                //this.totalShip.animate({ transform: 'r-45,150,150' }, 1000);
            };

            Spaceship.prototype.scale = function (scalingFactor) {
            };
            return Spaceship;
        })();
        Models.Spaceship = Spaceship;
    })(FallingSpaceship.Models || (FallingSpaceship.Models = {}));
    var Models = FallingSpaceship.Models;
})(FallingSpaceship || (FallingSpaceship = {}));
//# sourceMappingURL=Spaceship.js.map
