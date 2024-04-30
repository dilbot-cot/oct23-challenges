/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {

    let charMap = {};
    for (let i = 1; i < 27; i++) {
        let char = String.fromCharCode(i + 64);
        charMap[i] = char
    }

    let column = ""
    while (columnNumber > 0){
        let rem = columnNumber % 26;
        if (rem === 0) {
            column = 'Z' + column;
            columnNumber = Math.floor(columnNumber / 26) - 1
        } else {
            column = charMap[rem] + column;
            columnNumber = Math.floor(columnNumber / 26)
        }
    }
    return column
};

console.log(convertToTitle(2))
console.log(convertToTitle(10))
console.log(convertToTitle(20))
console.log(convertToTitle(30))