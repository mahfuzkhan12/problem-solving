/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
    
    let ans = [];
    nums.sort((a, b) => a - b);
    let sum = 0;
    let rest = nums.reduce((acc, val) => acc + val, 0);

    while (sum <= rest) {
        let max = nums.splice(nums.length - 1, 1);
        ans.push(max[0]);
        rest -= max[0];
        sum += max[0];
    }
    return ans;

};