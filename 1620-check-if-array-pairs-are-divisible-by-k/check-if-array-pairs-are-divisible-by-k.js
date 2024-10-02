/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function(arr, k) {
    
    let remainder_count = new Array(k).fill(0);

    for (let num of arr) {
        let remainder = num % k;
        if (remainder < 0) remainder += k;
        remainder_count[remainder]++;
    }
    
    if (remainder_count[0] % 2 !== 0) return false;
    for (let i = 1; i < k; i++) {
        if (remainder_count[i] !== remainder_count[k - i]) return false;
    }
    return true;


};