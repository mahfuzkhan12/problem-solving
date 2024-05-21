/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    
    let res = [[]];

    for (const num of nums) {
        const currentLength = res.length;
        for (let i = 0; i < currentLength; i++) {
            const subset = res[i].slice();
            subset.push(num); 
            res.push(subset); 
        }
    }

    return res;

};