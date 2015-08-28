module LanderExperiments.Pages {
    //console.log('LanderExperiments.Pages basic calculations');    

    interface ICalcResult {
        distance: number;
        speed: number;
    }

    export class BasicCalculations {

        //Gravitational acceleration value in meters per second squared
        gravityVal: number = 9.8;

        private initialSpeed: number = 0;

        //Basic calculation based just on time falling from a rest position
        private calcIdeal = function(seconds): ICalcResult {
            var speed: number = this.gravityVal * seconds;
            var totalDistance: number = speed * seconds * .5;
            return {
                distance: totalDistance,
                speed: speed
            };
        };

        //Calculation for incremental calculation
        //seconds: time in seconds since last calc
        //previousSpeed: speed from previous calc
        private calcIncremental = function(seconds, previousSpeed): ICalcResult {
            var newSpeed = (this.gravityVal * seconds) + previousSpeed;
            var incrementalDistance = newSpeed * seconds * .5;
            return {
                distance: incrementalDistance,
                speed: newSpeed
            };
        };

        public init() {
            
            var tbody$ = $('#resultBody');
            var rowTemplate = _.template($('#rowTemplate').html());
            var increment = 0.5;
            for (var second = 0; second < 100; second = second + increment) {
                var ideal = this.calcIdeal(second);
                //need to store the speed from the last calc and hand it into calcIncremental
                var incremental = this.calcIncremental(increment, this.initialSpeed);
                this.initialSpeed = incremental.speed;

                tbody$.append(rowTemplate(
                {
                    second: second,
                    idealTotalDistance: ideal.distance,
                    idealSpeed: ideal.speed,
                    incrementalDistance: incremental.distance,
                    newSpeed: incremental.speed
                }));

            }
        }
    }
}