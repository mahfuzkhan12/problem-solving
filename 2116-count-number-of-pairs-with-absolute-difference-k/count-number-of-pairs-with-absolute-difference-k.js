/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {

    var count = 0;

    for(var i = 0; i < nums.length; i++){
        for(var j = i; j < nums.length; j++){
            console.log(nums[j] - nums[i])
            if(Math.abs(nums[j] - nums[i] ) == Math.abs(k)){
                count++
            }
        }
    }

    return count

};