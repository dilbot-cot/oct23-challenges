/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    // initialise the result variable with 0 (in event no negative numbers)
    let result = 0;

    // loop as many times as there is values in the first array
    for (let i = 0; i < grid[0].length; i++) {
        // loop as many times as there are arrays
        for (let j = 0; j < grid.length; j++) {
            // if the value of the number at the current index position is less than 0
            if (grid[j][i] < 0) {
                // increment the result
                result ++
            }
        }
    }
    
    return result
};