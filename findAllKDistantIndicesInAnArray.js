var findKDistantIndices = function(nums, key, k) {

    const num_length = nums.length // nums array length


    // get all the key indexes index from the num array
    var all_key_indexes = []; 
    nums.filter(function(elem, index, array){
        if(elem == key) {
            all_key_indexes.push(index);
        }
    });


    var indexes = []; // return array 

    // get all the K distant indices
    for(i = 0; i < num_length; i++){
        for(j = 0; j < all_key_indexes.length; j++){
            if(Math.abs(i - all_key_indexes[j]) <= k){
                indexes.push(i)
                break;
            }
        }
    }

    return indexes;

};
