/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumPrimeDifference = function(nums) {
    
    const isPrime = (num) => {
        if(num < 2){
            return false
        }
        for (let i = 2; i < num; i++) {
            if (num % i == 0 && i !== num) {
                return false;
            }
        }
        return true
    }


    let firstIndex = false;
    let lastIndex = false;

    for(let i = 0; i < nums.length; i++){

        if(isPrime(nums[i])){
            console.log(nums[i], i)
            if(firstIndex === false){
                firstIndex = i
            }
            lastIndex = i
        }

    }

    return lastIndex - firstIndex

};