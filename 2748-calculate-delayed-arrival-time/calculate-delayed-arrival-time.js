/**
 * @param {number} arrivalTime
 * @param {number} delayedTime
 * @return {number}
 */
var findDelayedArrivalTime = function(arrivalTime, delayedTime) {
    
    let time = arrivalTime + delayedTime
    return time >= 24 ? time - 24 : time

};