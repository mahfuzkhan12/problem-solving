/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let n = nums.length;
    for (let i = 0; i < n; i++) {
      if (nums[i] < 1 || nums[i] > n) {
        nums[i] = 0;
      }
    }
    
    for (let i = 0; i < n; i++) {
      if (1 <= nums[i] % (n + 1) && nums[i] % (n + 1) <= n) {
        let ind = nums[i] % (n + 1) - 1;
        nums[ind] += n + 1;
      }
    }
    
    for (let i = 0; i < n; i++) {
      if (nums[i] <= n) {
        return i + 1;
      }
    }
    
    return n + 1;
};