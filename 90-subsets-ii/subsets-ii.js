/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {

    const unique = {}
    let res = [[]];

    for (const num of nums) {
        const currentLength = res.length;
        for (let i = 0; i < currentLength; i++) {
            const subset = res[i].slice();
            subset.push(num); 
            subset.sort((a, b) => a - b)
            if(!unique[subset]){
                res.push(subset); 
                unique[subset] = true
            }
        }
    }

    return res;

};