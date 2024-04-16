/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    // Built in functions
    // Number.isInteger returns boolean of if the Number is a `whole` number
    // log function is the inverse of an exponent, log2 specifically being oposite ^2
    // function checks if the log2 of n is a whole number
    return Number.isInteger(Math.log2(n))
};