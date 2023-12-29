/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    
    let ss = ""
    let st = ""

    const n = Math.max(s.length, t.length)
    for(let i = 0; i < n; i++){

        if(s[i]){
            if(s[i] != "#"){
                ss += s[i]
            }else {
                ss = ss.slice(0, -1)
            }
        }

        if(t[i]){
            if(t[i] != "#"){
                st += t[i]
            }else {
                st = st.slice(0, -1)
            }
        }

    }

    return ss === st

};