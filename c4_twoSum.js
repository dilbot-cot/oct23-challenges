/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // loop through each number in the array
    for (let i = 0; i < nums.length; i++) {
        // As we are guaranteed a match, we simply loop through every other number
        for (let j = i + 1; j < nums.length; j++){
            if (nums[i] + nums[j] === target) {
                // Output the indicied of the two numbers that complete the sum
                return [i,j];
            }
        }
    }
};