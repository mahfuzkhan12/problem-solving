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
            const char = s[i] ? s[i] : ""
            res += " "+char
            space_idx++
        }else {
            res += s[i]
        }
    }

    return res

};