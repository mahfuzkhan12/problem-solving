/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    
    const hexas = [0,1,2,3,4,5,6,7,8,9,"a", "b", "c", "d","e", "f"]

    if(num >= 0 && num <= 15) return hexas[num].toString();
    if(num < 0) num = num >>> 0;

    let res = [];
    while(num >= 16) {

        let rest = (num % 16);
        res.unshift(hexas[rest]);

        num = Math.floor(num / 16);
    }

    res.unshift(hexas[num]);

    return res.join("");

};