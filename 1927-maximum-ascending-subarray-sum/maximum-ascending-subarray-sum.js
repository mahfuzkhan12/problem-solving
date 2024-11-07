/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
    
    let max = 0;
    let currentMax = nums[0]
    let prev = nums[0]

    for(let i = 1; i < nums.length; i++){
        if(prev < nums[i]){
            currentMax += nums[i]
        }else {
            if(max < currentMax){
                max = currentMax
            }
            currentMax = nums[i]
        }
        prev = nums[i]
    }

    return max > currentMax ? max : currentMax

};