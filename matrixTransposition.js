const newArr = []
const transpose = function (matrix) {
  for (let c = 0; c < matrix[0].length; c++) {
    const newRow = []
    for (let r = 0; r < matrix.length; r++) {
      newRow.push(matrix[r][c])
      
    }
    newArr.push(newRow)

  }
return newArr






};






// Do not edit this function.
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write("\n");
  }
};

printMatrix(
  transpose([
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
  ])
);

console.log("----");

printMatrix(
  transpose([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);

console.log("----");
