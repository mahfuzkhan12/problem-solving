/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    let string = s+s;
    return goal.length === s.length && string.includes(goal)
};