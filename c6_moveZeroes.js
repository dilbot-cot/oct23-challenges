/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // get the length of the array including 0's
    let length = nums.length
    // create a new array filtering out all 0's
    let result = nums.filter((num) => num != 0);
    //get the length of the new array
    let newLength = result.length

    // for loop, that loops the amount of times equal to the original array minus new array
    for (let i = 0; i < length - newLength; i++) {
        // loop and push 0 to the end of the array
        result.push(0)
    }

    for (let i = 0; i < length; i++) {
        nums[i] = result[i]
    }
};