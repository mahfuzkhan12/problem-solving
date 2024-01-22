/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    
    let n = 1;
    let obj = {}
    let ans = [];

    for(const num of nums){
        obj[num] = obj[num] ? obj[num] + 1 : 1
    }

    for(let i = 1; i <= nums.length; i++){
        if(obj[i] == 2){
            ans.unshift(i)
        }
        
        if(!obj[i]){
            ans.push(i)
        }
    }

    return ans

};