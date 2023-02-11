var intToRoman = function(num) {
    let roman = '';
    let romanNumerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    
    for (let i = 0; i < values.length; i++) {
        while (num >= values[i]) {
            roman += romanNumerals[i];
            num -= values[i];
        }
    }
    return roman;
};
