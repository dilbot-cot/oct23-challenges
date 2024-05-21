/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    // convert number to binary
    let binary = n.toString(2)
    // set the result to 0
    result = 0
    // loop for the length of the binary string
    for (let i = 0; i < binary.length; i++) {
        // if the string index value is 1 (not using strict equal)
        if (binary[i] == 1) {
            // add 1 to the result
            result ++
        }
    } 
    return result
};