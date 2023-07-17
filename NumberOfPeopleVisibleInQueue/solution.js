/**
 * @param {number[]} heights
 * @return {number[]}
 */
var canSeePersonsCount = function(heights) {
    
    let output = new Array(heights.length).fill(0)

    for(let i = 0; i < heights.length - 1; i++) {

        let max = heights[i+1]
        for(let j = i+1; j < heights.length; j++){
            if(heights[i] < heights[j]){
                output[i]++
                break
            }else if(heights[j] >= max){
                output[i]++
                max = heights[j]
            }
        }
    }  

    
    return output
};