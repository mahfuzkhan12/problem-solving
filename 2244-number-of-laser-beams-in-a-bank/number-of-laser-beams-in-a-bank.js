/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {

    
    if(bank.length < 2){
        return 0
    }
    
    let prevCount = 0;
    let count = 0
    
    const m = bank[0].length

    for(let i = 0; i < bank.length; i++){

        let devices = 0
        for(let j = 0; j < m; j++){
            if(bank[i][j] == 1){
                devices++
            }
        }

        if(devices > 0){
            count += (prevCount * devices)
            prevCount = devices
        }

    }

    return count


};