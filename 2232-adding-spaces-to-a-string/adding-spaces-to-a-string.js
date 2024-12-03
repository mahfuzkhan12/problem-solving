/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
    
    let res = ""
    let space_idx = 0
    for(let i = 0; i < s.length; i++){
        if(i === spaces[space_idx]){
            res += " "
            space_idx++
        }
        res += s[i]
    }

    return res

};