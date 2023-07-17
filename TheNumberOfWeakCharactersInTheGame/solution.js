/**
 * @param {number[][]} p
 * @return {number}
 */
var numberOfWeakCharacters = function(p) {
    
    p.sort((a, b) => {
        if (a[0] === b[0]) {
            return b[1] - a[1];
        }
        return a[0] - b[0];
    });

    let maxDefense = 0;
    let count = 0;

    for (let i = p.length - 1; i >= 0; i--) {
        const [attack, defense] = p[i];

        if (defense < maxDefense) {
            count++;
        } else {
            maxDefense = defense;
        }
    }

    return count;

};