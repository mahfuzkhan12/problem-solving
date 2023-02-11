function findSubstring(s, words) {
    if (s === null || words === null || s.length === 0 || words.length === 0) return [];
  
    const res = [];
    const wordLen = words[0].length;
  
    const map = new Map();
    for (let word of words) {
        map.set(word, (map.get(word) || 0) + 1);
    }
  
    for (let i = 0; i < wordLen; i++) {
        let left = i;
        let right = i;
        let count = 0;
        const currentMap = new Map();
  
        while (right + wordLen <= s.length) {
            const word = s.substring(right, right + wordLen);
            if (!map.has(word)) {
                currentMap.clear();
                count = 0;
                left = right + wordLen;
                right = left;
            } else {
                currentMap.set(word, (currentMap.get(word) || 0) + 1);
                count++;
                right += wordLen;
                while (currentMap.get(word) > map.get(word)) {
                    const leftWord = s.substring(left, left + wordLen);
                    currentMap.set(leftWord, currentMap.get(leftWord) - 1);
                    count--;
                    left += wordLen;
                }
                if (count === words.length) {
                    res.push(left);
                }
            }
        }
    }
  
    return res;
}




console.log('====================================');
console.log(findSubstring(s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]));
console.log('====================================');