/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // set the array variable as 'words' then split the string wherever a space appears (and clear white space)
    let words = s.trim().split(' ');
    // provide output that is the final string of the array, and get the length of that string
    return words[words.length - 1].length;
};