/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/lodash/lodash.d.ts" />
//Gravitational acceleration value in meters per second squared
var gravityVal = 9.8;
var initialSpeed = 0;

//Basic calculation based just on time falling from a rest position
var calcIdeal = function (seconds) {
    var speed = gravityVal * seconds;
    var totalDistance = speed * seconds * .5;
    return { totalDistance: totalDistance, speed: speed };
};

//Calculation for incremental calculation
//seconds: time in seconds since last calc
//previousSpeed: speed from previous calc
var calcIncremental = function (seconds, previousSpeed) {
    var newSpeed = (gravityVal * seconds) + previousSpeed;
    var incrementalDistance = newSpeed * seconds * .5;
    return {
        incrementalDistance: incrementalDistance,
        speed: newSpeed
    };
};

var tbody$ = $('#resultBody');
var rowTemplate = _.template($('#rowTemplate').html());
var increment = 0.5;
for (var second = 0; second < 100; second = second + increment) {
    var ideal = calcIdeal(second);

    //need to store the speed from the last calc and hand it into calcIncremental
    var incremental = calcIncremental(increment, initialSpeed);
    initialSpeed = incremental.newSpeed;

    tbody$.append(rowTemplate({
        second: second,
        idealTotalDistance: ideal.totalDistance,
        idealSpeed: ideal.speed,
        incrementalDistance: incremental.incrementalDistance,
        newSpeed: incremental.speed
    }));
}
//# sourceMappingURL=CalculatingFallingBody.js.map
