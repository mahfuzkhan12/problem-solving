/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function(word) {

    let comp = ""

    let prev = word[0]
    let count = 1
    for(let i = 1; i < word.length; i++){
        if(word[i] !== prev || count === 9){
            comp += count+prev
            count = 0
        }
        if(word[i] !== prev){
            prev = word[i]
        }
        count++
    }
    comp += count+prev

    return comp

};