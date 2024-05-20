/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    numsMap = new Map();
    nums.forEach(i => {
        if (numsMap.has(i)) {
            numsMap.set(i, numsMap.get(i)+1)
        } else {
            numsMap.set(i, 1)
        }
    });

    for (const [key, value] of numsMap.entries()) {
        if (value === 1) {
            return key
        }
    }

};