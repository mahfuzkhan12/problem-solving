/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    
    const odds = []
    const evens = []

    for(const n of nums){
        if(n % 2 === 0){
            evens.push(n)
        }else {
            odds.push(n)
        }
    }

    return [...evens, ...odds]

};