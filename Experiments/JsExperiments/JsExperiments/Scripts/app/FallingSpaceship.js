/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/snap/snapsvg.d.ts" />
var FallingSpaceship;
(function (FallingSpaceship) {
    var flame;
    var currentState = false;

    function init() {
        var paper = Snap("#space");

        //var svgImport$ = $('#svgImport');
        Snap.load('/contents/spaceship.svg', function (fragment) {
            paper.append(fragment);

            flame = paper.select('#layer2');
            window["flame"] = flame;

            setInterval(toggleFlame, 100);
        });
    }
    FallingSpaceship.init = init;

    function toggleFlame() {
        currentState = !currentState;

        if (currentState) {
            flame.attr("display", "none");
        } else {
            flame.attr("display", "inline");
        }
    }
})(FallingSpaceship || (FallingSpaceship = {}));
//# sourceMappingURL=FallingSpaceship.js.map
