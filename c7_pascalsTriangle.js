/**
 * Credit to ChatGPT 4
 * 
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let number = [[1]];

    for (let i = 1; i < numRows; i++) {
        let prevRow = number[i - 1];
        let curRow = [1];

        for (let j = 1; j < i; j++) {
            curRow[j] = prevRow[j - 1] + prevRow[j];
        }

        curRow.push(1);
        number.push(curRow)
        
    }
    return number

};