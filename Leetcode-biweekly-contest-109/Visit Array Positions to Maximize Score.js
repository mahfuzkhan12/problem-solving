/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var maxScore = function(nums, x) {
    
    let even_scroes = nums[0] - (nums[0] % 2 === 0 ? 0 : x);
    let odd_scores = nums[0] - (nums[0] % 2 === 0 ? x : 0);
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            even_scroes = nums[i] + Math.max(even_scroes, odd_scores - x);
        } else {
            odd_scores = nums[i] + Math.max(odd_scores, even_scroes - x);
        }
    }
    return Math.max(even_scroes, odd_scores);
};