var LanderExperiments;
(function (LanderExperiments) {
    (function (Pages) {
        

        var BasicCalculations = (function () {
            function BasicCalculations() {
                //Gravitational acceleration value in meters per second squared
                this.gravityVal = 9.8;
                this.initialSpeed = 0;
                //Basic calculation based just on time falling from a rest position
                this.calcIdeal = function (seconds) {
                    var speed = this.gravityVal * seconds;
                    var totalDistance = speed * seconds * .5;
                    return {
                        distance: totalDistance,
                        speed: speed
                    };
                };
                //Calculation for incremental calculation
                //seconds: time in seconds since last calc
                //previousSpeed: speed from previous calc
                this.calcIncremental = function (seconds, previousSpeed) {
                    var newSpeed = (this.gravityVal * seconds) + previousSpeed;
                    var incrementalDistance = newSpeed * seconds * .5;
                    return {
                        distance: incrementalDistance,
                        speed: newSpeed
                    };
                };
            }
            BasicCalculations.prototype.init = function () {
                var tbody$ = $('#resultBody');
                var rowTemplate = _.template($('#rowTemplate').html());
                var increment = 0.5;
                for (var second = 0; second < 100; second = second + increment) {
                    var ideal = this.calcIdeal(second);

                    //need to store the speed from the last calc and hand it into calcIncremental
                    var incremental = this.calcIncremental(increment, this.initialSpeed);
                    this.initialSpeed = incremental.speed;

                    tbody$.append(rowTemplate({
                        second: second,
                        idealTotalDistance: ideal.distance,
                        idealSpeed: ideal.speed,
                        incrementalDistance: incremental.distance,
                        newSpeed: incremental.speed
                    }));
                }
            };
            return BasicCalculations;
        })();
        Pages.BasicCalculations = BasicCalculations;
    })(LanderExperiments.Pages || (LanderExperiments.Pages = {}));
    var Pages = LanderExperiments.Pages;
})(LanderExperiments || (LanderExperiments = {}));
//# sourceMappingURL=basicCalculations.js.map
