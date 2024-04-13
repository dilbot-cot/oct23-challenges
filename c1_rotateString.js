/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    // had to include this as it failed on a submission where s='aa' and goal = 'a'
    if (goal.length !== s.length) return false; 
    // define variable 'test' as a concatination of the s string twice
    let test = s+s;
    // using the built in function 'includes' check if the goal string is included in the concatenated string
    return test.includes(goal);
};