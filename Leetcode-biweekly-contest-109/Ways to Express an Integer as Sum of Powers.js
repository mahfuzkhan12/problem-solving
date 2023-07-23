/**
 * @param {number} n
 * @param {number} x
 * @return {number}
 */
var numberOfWays = function(n, x) {
    
    const mod = 10**9 + 7;

    const arr = new Array(n + 1).fill(0);

    arr[0] = 1;

    for (let i = 1; i <= n; i++) {
      for (let j = n; j >= i**x; j--) {
        arr[j] += arr[j - i**x];
        arr[j] %= mod;
      }
    }

    return arr[n];
};