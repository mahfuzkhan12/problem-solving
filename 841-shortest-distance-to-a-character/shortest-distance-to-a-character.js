/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {

    const indices = []
    const res = []

    const len = s.length

    for(let i = 0; i < len; i++){
        if(s[i] === c){
            indices.push(i)
        }
    } 

    for(let i = 0; i < len; i++){
        let closest = len
        for(const idx of indices){
            closest = Math.min(Math.abs(i - idx), closest)
        }
        res.push(closest)
    }   

    return res

};
