/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    // initialise empty map
    let charMap = {};
    // perform for loop 26 times (each letter in alphabet)
    for (let i = 1; i < 27; i++) {
        // set variable 'char' to be a String object from the built in CharCode
        let char = String.fromCharCode(i + 64); //select the character code that is 64 + current iteration away (A = 65, B = 66 ...)
        // set the current iteration as the 'key' and the output of char as the 'value' in the map
        charMap[i] = char
    }

    // initialise empty string
    let result = ""
    // perform while loop, as long as the columnNumber passed through is a positive number
    while (columnNumber > 0){
        // set the remainder to be the modulus of the columnNumber / 26
        let remainder = columnNumber % 26;
        // If the remainder is exactly equal to 0, this means the column number must by exactly divisible by 26
        if (remainder === 0) {
            // Therefore add 'Z' to the result string
            result = 'Z' + result;
            // And re-set the columnNumber to be the old column number divided by 26 - 1
            columnNumber = (columnNumber / 26) - 1
        } else {
            // get the value from the charMap that relates to the remainder, add this to the START of the string, and also keep the old string
            result = charMap[remainder] + result;
            // re-set the columnNumber to be the old column number divided by 26 rounded down
            columnNumber = Math.floor(columnNumber / 26)
        }
    }
    return result
};