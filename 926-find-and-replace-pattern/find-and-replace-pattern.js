/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {

    const match = (word) => {
        let d = {}
        for(let i = 0 ; i < pattern.length ;i++){
            if(!d[pattern[i]] && !Object.values(d).includes(word[i])){
                d[pattern[i]] = word[i]
            }else if(d[pattern[i]] !== word[i]) return false
        }
        return true
    }

    const res = []
    for(let word of words){
        if(match(word,pattern)) res.push(word)
    }

    return res

};