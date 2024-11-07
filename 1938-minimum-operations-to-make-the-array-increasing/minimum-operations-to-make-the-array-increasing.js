/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    
    let operations = 0;
    let prevNum = nums[0]

    for(let i = 1; i < nums.length; i++){
        if(prevNum >= nums[i]){
            const increment = (prevNum - nums[i]) + 1
            operations += increment
            prevNum = nums[i] + increment
        }else {
            prevNum = nums[i]
        }
    }

    return operations

};