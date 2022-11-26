
const trans = require("./transpose");
const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    console.log(horizontalJoin)
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    const verticalJoin = transpose(letters).map(ls => ls.join('')) 
    for (l of verticalJoin) {
        if (l.includes(word)) return true
    }
    return false 


}


module.exports = wordSearch






const transpose = function (matrix) {
    const newArr = []    
  for (let c = 0; c < matrix[0].length; c++) {
    const newRow = []
    for (let r = 0; r < matrix.length; r++) {
      newRow.push(matrix[r][c])
      
    }
    newArr.push(newRow)

  }
return newArr
};



