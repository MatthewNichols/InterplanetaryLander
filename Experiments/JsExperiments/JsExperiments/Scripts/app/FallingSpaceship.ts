/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/snap/snapsvg.d.ts" />

module FallingSpaceship {

    var flame: any;
    var currentState = false;

    export function init() {
        
        var paper = Snap("#space");

        //var svgImport$ = $('#svgImport');
        Snap.load('/contents/spaceship.svg', (fragment) => {
            paper.append(fragment);
            
            flame = paper.select('#layer2');
            window["flame"] = flame;

            setInterval(toggleFlame, 100);


        });

        
    }


    function toggleFlame() {
        currentState = !currentState;

        if (currentState) {
            flame.attr("display", "none");
        } else {
            flame.attr("display", "inline");    
        }
        
    }
} 