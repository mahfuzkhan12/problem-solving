/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(nums) {
    
    let res = [];
    let bin = 0;
    for(let num of nums){
        bin = (bin % 5) * 2 + num;
        let checkBinary = ( bin % 5 == 0);
        res.push(checkBinary);
    }
    return res

};