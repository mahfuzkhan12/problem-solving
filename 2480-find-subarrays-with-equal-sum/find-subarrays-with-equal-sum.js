/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function(nums) {
    
    const seenSums = new Set();

    for(let i = 0; i < nums.length - 1; i++) {
        const sum = nums[i] + nums[i + 1];

        if(seenSums.has(sum)) {
            return true;
        }

        seenSums.add(sum);
    }
    
    return false;
};