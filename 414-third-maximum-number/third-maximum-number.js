/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    
    const obj = {1: null, 2: null, 3: null}

    const exist = {}

    for(const num of nums){
        if(exist[num]){
            continue
        }
        exist[num] = true

        if(num > obj[1] || !obj[1]){
            obj[3] = obj[2]
            obj[2] = obj[1]
            obj[1] = num
        }else if(num > obj[2] || !obj[2]){
            obj[3] = obj[2]
            obj[2] = num
        }else if(num > obj[3] || !obj[3]) {
            obj[3] = num
        }
    }

    console.log(obj)
    if(obj[3] !== null){
        return obj[3]
    }
    return obj[1]

};