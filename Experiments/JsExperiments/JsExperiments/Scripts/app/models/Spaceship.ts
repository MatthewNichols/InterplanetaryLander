/// <reference path="../../typings/snap/snapsvg.d.ts" />

module FallingSpaceship.Models
{

    export class Spaceship
    {
        private totalShip: any;
        private flame: any;
        private flameState = false;
        private flameIntervalId: number;
        private rocketAlreadyOn = false;

        constructor(private paper: Paper, private svgPath: string) {

            Snap.load(svgPath, (fragment) =>
            {
                //console.log(fragment);
                paper.append(fragment);

                //Set member properties to different parts of the imported SVG.
                this.totalShip = paper.select('#totalShip');
                this.flame = paper.select('#flame');
                //console.log(this.flame);
                this.flame.attr("display", "none");
            });
        }

        rocketOn(): void
        {
            if (this.rocketAlreadyOn) {
                return;
            }

            this.rocketAlreadyOn = true;

            var toggleFlame = () =>
            {
                this.flameState = !this.flameState;

                if (this.flameState)
                {
                    this.flame.attr("display", "none");
                } else
                {
                    this.flame.attr("display", "inline");
                }
            }

            this.flameIntervalId = setInterval(toggleFlame, 100);

        }

        rocketOff(): void
        {
            this.flame.attr("display", "none");
            this.flameState = false;
            clearInterval(this.flameIntervalId);
            this.rocketAlreadyOn = false;
        }

        turnDegrees(degrees: number) {
            var transformString = 'r' + degrees + ',124,150';
            console.log(transformString);
            this.totalShip.animate({ transform: transformString }, 1000);
            //this.totalShip.animate({ transform: 'r-45,150,150' }, 1000);
        }
    }
} 