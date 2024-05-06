// /** Option if allowed to use string
//  * @param {number} x
//  * @return {boolean}
//  */
// var isPalindrome = function(x) {
//     let reversedXString = Array.from(String(x)).reverse().join('')
//     let xString = String(x)
//     return xString === reversedXString
// };


/** Option with no string
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false
    }
    let original = x
    let reversed = 0;
    while (x > 0) {
        let digit = x % 10;
        reversed = reversed * 10 + digit
        x = Math.floor(x / 10);
    }

    return original === reversed
};