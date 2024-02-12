/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    
    const obj = {}

    for(const n of nums){
        if(obj[n]){
            obj[n] += 1
        }else {
            obj[n] = 1
        }
    }

    let maxNum = 0;
    let majority = 0;
    for (const [key, num] of Object.entries(obj)) {
        if(num > maxNum){
            maxNum = num;
            majority = key
        }
    }

    return majority

};