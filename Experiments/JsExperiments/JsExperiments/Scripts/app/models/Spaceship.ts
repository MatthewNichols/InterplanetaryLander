/// <reference path="../../typings/snap/snapsvg.d.ts" />

module FallingSpaceship.Models
{

    export class Spaceship
    {
        private flame: any;
        private flameState = false;
        private flameIntervalId: number;

        constructor(private paper: Paper, private svgPath: string) {

            Snap.load(svgPath, (fragment) =>
            {
                paper.append(fragment);

                this.flame = paper.select('#layer2');
                this.flame.attr("display", "none");
            });
        }

        public rocketOn(): void
        {
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

        public rocketOff(): void
        {
            this.flame.attr("display", "none");
            this.flameState = false;
            clearInterval(this.flameIntervalId);
        }

        turnDegrees(degrees: number) {
            
        }
    }
} 