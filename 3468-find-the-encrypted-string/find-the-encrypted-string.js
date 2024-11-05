/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var getEncryptedString = function(s, k) {
    
    const len = s.length;

    let newStr = s.split("")

    for(let i = 0; i < len; i++){
        let target = k+i
        while(target >= len){
            target = target - len
        }
        newStr[i] = s[target]
    }

    return newStr.join("")

};