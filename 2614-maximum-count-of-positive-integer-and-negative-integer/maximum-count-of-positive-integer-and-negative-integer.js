/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {

    let positiveCount = 0;
    let negativeCount = 0;    

    for(let i = 0; i < nums.length; i++){
        if(nums[i] > 0){
            positiveCount++
        }else if(nums[i] < 0){
            negativeCount++
        }
    }

    return positiveCount > negativeCount ? positiveCount : negativeCount

};
