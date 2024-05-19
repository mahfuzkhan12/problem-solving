/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    
    const obj = {}
    const keys = []


    for(const c of s){
        if(obj[c]){
            obj[c] += c
        }else {
            keys.push(c)
            obj[c] = c
        }
    }

    keys.sort((a, b) => obj[b].length - obj[a].length);

    let res = ""
    for(let i = 0; i < keys.length; i++){
        res += obj[keys[i]]
    }

    return res


};