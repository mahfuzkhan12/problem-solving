/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    
    if(arr.length < 3){
        return false
    }

    let hasClimbing = false
    let increasing = true
    let max = arr[0]

    for(let i = 1; i < arr.length; i++){
        if(max < arr[i]){
            hasClimbing = true
            if(!increasing){
                return false
            }
            max = arr[i]
        }else {
            increasing = false
            if(max > arr[i]){
                max = arr[i]
            }else {
                return false
            }
        }
    }
    
    
    return !increasing && hasClimbing

};