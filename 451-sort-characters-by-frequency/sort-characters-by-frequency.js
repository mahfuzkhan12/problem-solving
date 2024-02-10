/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    
    const obj = {}

    for(const c of s){
        if(obj[c]) {
            obj[c] += c
        }else {
            obj[c] = c
        }
    }

    const entries = Object.entries(obj);
    entries.sort((a, b) => b[1].length - a[1].length);
    const sortedKeys = entries.map(([key, value]) => key);

    let ans = ""
    for(let i = 0; i < sortedKeys.length; i++){
        ans += obj[sortedKeys[i]]
    }

    return ans

};