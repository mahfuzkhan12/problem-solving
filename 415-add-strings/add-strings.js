/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {

    const A = "0".charCodeAt(0);
    const Z = "9".charCodeAt(0);

    const n1_length = num1.length
    const n2_length = num2.length

    let result = "";
    let i = -1;
    let tmp = 0;

    while (num1[n1_length + i] || num2[n2_length + i]) {

        let n1 = num1[n1_length + i] || "0";
        let n2 = num2[n2_length + i] || "0";

        let sum = A + (n1.charCodeAt(0) - A) + (n2.charCodeAt(0) - A) + tmp;

        const newVal = sum > Z ? (A-1) + (sum%Z) : sum;
        tmp = sum > Z ? 1 : 0;

        result = String.fromCharCode(newVal) + result;
        i--;
    }
    
    if (tmp != 0) result = tmp+result;
    return result;
};