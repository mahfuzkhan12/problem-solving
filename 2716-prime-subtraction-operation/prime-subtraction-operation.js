/**
 * @param {number[]} nums
 * @return {boolean}
 */
var primeSubOperation = function (nums) {


    function isPrime(num) {
        if (num <= 1) return false;
        if (num === 2) return true;
        if (num % 2 === 0) return false;

        for (let i = 3; i * i <= num; i += 2) {
            if (num % i === 0) {
                return false; 
            }
        }
        return true;
    }

    let sorted_started = nums.length
    // for (let i = 1; i < nums.length; i++) {
    //     if (nums[i] <= nums[i - 1]) {
    //         sorted_started = i === nums.length - 1 ? nums.length : i
    //     }
    // }

    for (let i = 0; i < sorted_started; i++) {
        let number = 0
        let okay = false
        // if (i === nums.length - 1 && nums[i] > nums[i - 1]) {
        //     okay = true
        // } else {
            for (let j = nums[i] - 1; j >= 2; j--) {
                if (isPrime(j)) {
                    number = j;
                    if (i === nums.length - 1) {
                        nums[i - 1] < nums[i] - number
                    }
                    if (nums[i - 1] < nums[i] - number || i === 0) {
                        nums[i] = nums[i] - number
                        okay = true
                        break;
                    }
                }
            }
        // }
        
        if (!okay && nums[i] <= nums[i - 1]) {
            return false
        }
    }
    
    return true;

};