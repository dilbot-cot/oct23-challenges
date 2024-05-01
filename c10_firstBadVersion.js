/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        // set start point as 0 and end point as total version number
        low = 0;
        high = n;
        // set a mid point half way between these numbers
        mid = Math.floor((high) / 2)
        // perform a binary search algorithm 
        while (low <= high) {
            // if the mid IS the bad version & mid - 1 is NOT the bad version, mid is the first bad version
            if (isBadVersion(mid) && !isBadVersion(mid - 1)){
                return mid
            // if mid is NOT the bad versions, but mid + 1 IS the bad version, mid + 1 is the first bad version
            } else if (!isBadVersion(mid) && isBadVersion(mid + 1)) {
                return mid + 1
            // if mid is NOT the bad version (but also mid + 1 is also NOT a bad version), set the new mid start point to be the mid point
            } else if (!isBadVersion(mid)) {
                low = mid
            // otherwise, set the new end point as the existing mid point
            } else {
                high = mid
            }
            // lastly, set a new mid point by getting the half way point between the new start and end points.
            mid = Math.floor((low + high) / 2);
        }
    };
};