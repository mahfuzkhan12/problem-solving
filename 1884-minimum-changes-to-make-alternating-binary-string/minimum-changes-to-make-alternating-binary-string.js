/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    
    let prev = "0", prev_l = "1"

    let count = s[0] != "0" ? 1 : 0;
    let count_l = s[0] != "1" ? 1 : 0;

    for(let i = 1; i < s.length; i++){
        if(prev == s[i]){
            count++
            prev_l = s[i]
            prev = s[i] == "0" ? "1" : "0"
        }else {
            count_l++
            prev_l = s[i] == "0" ? "1" : "0"
            prev = s[i]
        }
    }


    return count < count_l ? count : count_l

};