/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function (s) {

    let ans = s[0]

    let charCount = 1;
    let prevChar = s[0]

    for (let i = 1; i < s.length; i++) {
        if (s[i] === prevChar) {
            if (charCount < 2) {
                ans += s[i]
            }
            charCount++
        } else {
            prevChar = s[i]
            charCount = 1
            ans += s[i]
        }
    }

    return ans

};