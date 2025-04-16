/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function(low, high) {
    
    let res = 0;

    for(let num = low; num <= high; num++){

        const str = num.toString();
        let len = str.length;

        if (len % 2 !== 0) continue;

        let half = len / 2;
        let leftSum = 0;
        let rightSum = 0;


        for (let i = 0; i < half; i++) {
            leftSum += parseInt(str[i]); 
            rightSum += parseInt(str[half + i]);
        }
        
        if (leftSum === rightSum) {
            res++;
        }

    }

    return res

};