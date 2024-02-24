/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    
    let coordinates = new Set();
    let x = 0, y = 0;
    coordinates.add(`${x},${y}`);

    for (let ch of path) {
        if (ch === 'N') {
            y++;
        } else if (ch === 'S') {
            y--;
        } else if (ch === 'E') {
            x++;
        } else if (ch === 'W') {
            x--;
        }

        let coordinate = `${x},${y}`;

        if (coordinates.has(coordinate)) {
            return true;
        }

        coordinates.add(coordinate);
    }

    return false;


};