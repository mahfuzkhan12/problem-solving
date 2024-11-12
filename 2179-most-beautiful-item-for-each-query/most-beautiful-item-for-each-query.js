/**
 * @param {number[][]} items
 * @param {number[]} queries
 * @return {number[]}
 */
var maximumBeauty = function(items, queries) {
    
    items.sort((a, b) => a[0] - b[0]);
    const beauty = [];
    let maxBeauty = items[0][1];
    beauty.push(maxBeauty);

    for (let i = 1; i < items.length; i++) {
        maxBeauty = Math.max(items[i][1], maxBeauty);
        beauty.push(maxBeauty);
    }

    const result = [];
    for (let query of queries) {
        let index = binarySearch(items, query);
        if (index >= 0) {
            result.push(beauty[index]);
        } else {
            result.push(0);
        }
    }
    return result;

};

function binarySearch(items, query) {
    let left = 0, right = items.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (items[mid][0] <= query) left = mid + 1;
        else right = mid - 1;
    }
    return right;
}