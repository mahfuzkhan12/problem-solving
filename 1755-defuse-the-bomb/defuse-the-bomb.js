/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    
    let decoded = Array(code.length).fill(0)
    if (k == 0) return decoded

    const n = code.length

    for (let i = 0; i < n; i++) {
        let sum = 0;

        if (k > 0) {
            for (let j = 1; j <= k; j++) {
                sum += code[(i + j) % n];
            }
        } else {
            for (let j = 1; j <= -k; j++) {
                sum += code[(i - j + n) % n];
            }
        }

        decoded[i] = sum;
    }

    return decoded

};