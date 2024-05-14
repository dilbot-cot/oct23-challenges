/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // initialise a new empty map
    const numsMap = new Map()

    // loop through each element in the nums array
    nums.forEach(element => {
        // if the element already exists in the map
        if (numsMap.has(element)) {
            // add 1 to the value
            numsMap.set(element, numsMap.get(element)+1);
        // otherwise add the element as a key with value of 1
        } else {
            numsMap.set(element, 1)
        }
    });
    // turn the map back into an array, that is sorted largest to smallest based on the values frequency
    let sortedNumsMap = Array.from(numsMap.entries()).sort((a, b) => b[1] - a[1]);
    // Maps each [number, frequency] pair to just the number and slices the array to return the top `k` most frequent elements.
    return sortedNumsMap
    .map(key => key[0])
    .slice(0, k)
};