/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    
    const obj = {}
    let ans = []

    for(const num of nums){
        if(obj[num] > -1){
            obj[num] = obj[num] + 1
        }else {
            obj[num] = 0
        }
        
        if(ans[obj[num]]){
            ans[obj[num]].push(num)
        }else {
            ans.push([num])
        }
    }

    return ans

};