/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    
    let obj = {}

    for(const num of nums) {

        if(obj[num]){
            obj[num] = obj[num] + 1
        }else {
            obj[num] = 1
        }

    }

    let ans = 0;

    for(const idx of Object.keys(obj)){
        const count = obj[idx]
        if(count > 1){

            if(count % 3 == 0){
                ans += count / 3
            }else {
                ans += Math.floor(count / 3) + 1
            }

        }else {
            return -1
        }
    }

    return ans

};