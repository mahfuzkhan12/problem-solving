/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    if( x < 0 ) return false;

    let original = x;
    let reversed = 0;

    while( x > 0) {
        let lastDigit = x % 10;
        reversed = ( reversed * 10 ) + lastDigit;
        x = Math.floor( x / 10 );
    }

   return original === reversed;
};