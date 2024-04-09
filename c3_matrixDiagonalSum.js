/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    // work out the length of the side (as this is a square)
    let len = mat.length;
    // initialise the sum
    let sum = 0;
    // loop while i is less than the length of array
    for (let i = 0; i < len; i++){
        // add the primary diagonal starting at 0,0
        sum += mat[i][i];
        // add the secondary diagonal
        sum += mat[len-1-i][i]
    }
    // if the sqaure is odd numbers (3x3, 5x5 etc) remove the midpoint digit
    if (len % 2 == 1){
        // determin a midpoint to we can subtract this from the overall sum
        let mid = Math.floor(len/2);
        sum -= mat[mid][mid];
    }
    return sum;
};
