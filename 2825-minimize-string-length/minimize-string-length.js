/**
 * @param {string} s
 * @return {number}
 */
var minimizedStringLength = function(s) {
    
    let obj = {}
    let count = 0

    for(let i = 0; i < s.length; i++){
        if(!obj[s[i]]){ 
            obj[s[i]] = 1
            count++
        }
    }

    return count

};