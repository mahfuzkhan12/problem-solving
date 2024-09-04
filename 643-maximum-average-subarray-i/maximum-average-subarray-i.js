/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    
    var arr = [];
    var sum = 0;

    for(let i = 0; i < k; i++){
        arr.push(nums[i])
        sum += nums[i]
    }
    var res = sum / k;

    for(let i = k; i < nums.length; i++){
        const remove = arr[0];
        sum -= remove
        sum += nums[i]
        arr.shift()
        arr.push(nums[i])
        const average = sum / k;
        res = average > res ? average : res;
    }

    return res;

};