
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // Create a map object of standard roman values that include the subtractors
    const romanNumerals = new Map([
        ["I", 1],
        ["IV", 4],
        ["V", 5],
        ["IX", 9],
        ["X", 10],
        ["XL", 40],
        ["L", 50],
        ["XC", 90],
        ["C", 100],
        ["CD", 400],
        ["D", 500],
        ["CM", 900],
        ["M", 1000]
    ])
    // Initialise a calculator
    let calculator = 0

    // Loop through each character in the string
    for (let i = 0; i < s.length; i++) {
        // If the character + the next character exist in the Map
        if (romanNumerals.has(s[i] + s[i+1])) {
            // Add that value to the calculator
            calculator += romanNumerals.get(s[i] + s[i+1])
            // then increment i an additional time to skip the next character
            i++
        } else {
            // Otherwise add the value to the calculator
            calculator += romanNumerals.get(s[i])
        }
    }
    //return the result of the calculator
    return calculator
};