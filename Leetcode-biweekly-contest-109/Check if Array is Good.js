/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function(nums) {
    
    const maxNum = Math.max(...nums);
    const n = maxNum;

    if (nums.length !== n + 1) {
          return false;
    }
  

    const occurrences = new Array(n + 1).fill(0);
    for (const num of nums) {
          occurrences[num]++;
    }
  

    for (let i = 1; i <= n - 1; i++) {
      if (occurrences[i] !== 1) {
          return false;
      }
    }
  

    if (occurrences[n] !== 2) {
          return false;
    }
  
    return true
  
};