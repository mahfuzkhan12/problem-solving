/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    
    let count = 0
    let ans = ""

    for(let i = 0; i < s.length; i++){
        if(s[i] == s[i-1]) {
            if(count != 2){
                count++
                ans += s[i]
            }
        }else {
            ans += s[i]
            count = 1
        }
    }

    return ans
};