/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    if(s.length != t.length){
        return false
    }

    let obj_s = {}
    let obj_t = {}
    for(let i = 0; i < s.length; i++){
        if(obj_s.hasOwnProperty(s[i])){
            obj_s[s[i]] = obj_s[s[i]] + 1
        }else {
            obj_s[s[i]] = 1
        }

        if(obj_t.hasOwnProperty(t[i])){
            obj_t[t[i]] = obj_t[t[i]] + 1
        }else {
            obj_t[t[i]] = 1
        }
    }
    

    for(const c in obj_s){
        if(obj_t.hasOwnProperty(c) && obj_t[c] == obj_s[c]){
            delete obj_t[c]
        }else {
            return false
        }
    }

    return true

};