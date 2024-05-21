/**
 * @param {number[][]} nums
 * @return {number}
 */
var matrixSum = function(nums) {
    // Set score to 0
    let score = 0

    // sort each array in ascending values
    for (let i = 0; i < nums.length; i++) {
        nums[i].sort((a, b) => a - b);
    }

    // loop for the amount of indexes in the first array
    for (let i = 0; i < nums[0].length; i++) {
        // set the winner to be 0
        let winner = 0
        // loop over each array
        for (let j = 0; j < nums.length; j++) {
            // let winner equal the maximum number from the index of each array
            // this will evaluate the current winner against the current index
            winner = Math.max(nums[j][i], winner)
        }
        // increase the score by the winner number, then loop to the next index position or each array
        score += winner 
    }
    // return the total score
    return score

};

