/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
    
    let res = [...nums[0]]
    for(let i = 1; i < nums.length; i++){
        res = res.filter(n => nums[i].includes(n))
        if(res.length == 0) return []
    }
    return res.sort((a,b) => a-b)

};