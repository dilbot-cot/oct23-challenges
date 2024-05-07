// /** Option if allowed to use string
//  * @param {number} x
//  * @return {boolean}
//  */
// var isPalindrome = function(x) {
//     // create new variable which 1st creates a reversed array from x
//     // then joins the array back into a string
//     let reversedXString = Array.from(String(x)).reverse().join('')
//     // turn the number(x) into a string so we can evaluate
//     let xString = String(x)
//     // return true or false
//     return xString === reversedXString
// };


/** Option with no string
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // Shortcircut, if number is negative it can never be a palindrome.
    if (x < 0) {
        return false
    }
    // set 'original' as the initial value of x
    let original = x
    //initialise 'reversed' variable at 0
    let reversed = 0;
    // Loop as long as x is a positive number
    while (x > 0) {
        // get the last digit by returing the remainder of x / 10
        let digit = x % 10;
        // set the reversed variable to the current reversed variable * 10 + remainder
        reversed = reversed * 10 + digit
        // set new value of x to be the rounded down value of x / 10
        x = Math.floor(x / 10);
    }

    return original === reversed
};