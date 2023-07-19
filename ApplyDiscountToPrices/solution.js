/**
 * @param {string} sentence
 * @param {number} discount
 * @return {string}
 */
var discountPrices = function(sentence, discount) {
    
    const arr = sentence.split(" ")
    const pattern = /^\$(\d+)$/;
    
    let ans = []
    for(let i = 0; i < arr.length; i++){
        const match = arr[i].match(pattern)
        if(match){
            const num = parseInt(match[1])
            ans.push("$"+ (num - ((num / 100) * discount)).toFixed(2).toString())
        }else {
            ans.push(arr[i])
        }
    }

    return ans.join(" ")
};