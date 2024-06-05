/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    
    let common = words[0].split("").sort();
    for (let c of words) {
        c = c.split("").sort();

        let lp = 0;
        let rp = 0;
        let len = common.length;
        let newc = [];
        while (lp < len && rp < c.length) {
            if (common[lp] == c[rp]) {
                newc.push(c[rp]);
                lp++;
                rp++;
            } else {
                if (common[lp] < c[rp]) lp++;
                else rp++;
            }
        }
        common = newc;
    }
    return common;

};