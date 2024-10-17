/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
    
    let max = num 
    const num_arr = num.toString().split("");

    for(let i = 0; i < num_arr.length - 1; i++){

        let to_swap = parseInt(num_arr[i])

        for(let j = i+1; j < num_arr.length; j++){

            if(to_swap < parseInt(num_arr[j])){
                const arr = [...num_arr]
                const tmp = arr[j]
                arr[i] = tmp
                arr[j] = to_swap
                const number = parseInt(arr.join(""))

                if(number > max){
                    max = number
                }
            }

        }
    }

    return max

};
