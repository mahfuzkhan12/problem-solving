/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    
    var sum = 0;

    for(let i = 0; i < k; i++){
        sum += nums[i]
    }
    var res = sum / k;

    for(let i = k; i < nums.length; i++){
        const remove = nums[i - k];
        sum -= remove
        sum += nums[i]
        const average = sum / k;
        res = average > res ? average : res;
    }

    return res;

};