/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function(sentence) {
    
    const arr = sentence.split(" ")
    const length = arr.length

    if(length === 1){
        const len = arr[0].length;
        return arr[0][0] === arr[0][len - 1]
    }

    for(let i = 1; i < length; i++){
        const len = arr[i - 1].length
        if(arr[i - 1][len - 1] !== arr[i][0]){
            return false;
        }
    }

    const lastLen = arr[length - 1].length
    if(arr[0][0] !== arr[length - 1][lastLen - 1]){
        return false
    }

    return true

};