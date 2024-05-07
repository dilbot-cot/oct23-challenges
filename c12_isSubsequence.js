/** 
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let start = 0
    let end = t.length;
    // loop starting at index 0
    for (let i = 0; i < end; i++) {
        // search the t array for the earliest index the index of i finds
        if(s[start] === t[i]) {
            // set this index as the new start point and repeat for each letter
            start++;
        }
    }
    return start === s.length
};