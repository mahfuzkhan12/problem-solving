/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    
    let max_num_1 = nums[0]
    let max_num_2 = nums[1]

    if(max_num_1 < max_num_2){
        const tmp = max_num_1
        max_num_1 = max_num_2
        max_num_2 = tmp
    }

    for(let i = 2; i < nums.length; i++){
        if(max_num_1 < nums[i]) {
            const tmp = max_num_1
            max_num_1 = nums[i]
            max_num_2 = tmp
        }else if(max_num_2 < nums[i]){
            max_num_2 = nums[i]
        }
    }

    return (max_num_1 - 1) * (max_num_2 - 1)

};