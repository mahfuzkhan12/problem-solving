/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    
    var res = ""

    s = s.split(" ")


    for(var i = 0; i < s.length; i++){
        if(s[i] && s[i] != ""){
            if(i == 0){
                res = s[i]
            }else {
                if(res == ""){
                    res = s[i]
                }else {
                    res = s[i] + " " + res
                }
            }
        }
    }

    return res

};