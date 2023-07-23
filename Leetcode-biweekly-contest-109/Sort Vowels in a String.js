/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    
    
    function isVowel(char) {
      return 'aeiouAEIOU'.indexOf(char) !== -1;
    }

    const vowels = [];
    const consonants = [];

    for (let i = 0; i < s.length; i++) {
      if (isVowel(s[i])) {
          vowels.push(s[i]);
      } else {
          consonants.push({ char: s[i], index: i });
      }
    }

    vowels.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));

    let t = '';
    let vowelIndex = 0;
    let consonantIndex = 0;

    for (let i = 0; i < s.length; i++) {
      if (isVowel(s[i])) {
        t += vowels[vowelIndex++];
      } else {
        t += consonants[consonantIndex++].char;
      }
    }

    return t;
  
};