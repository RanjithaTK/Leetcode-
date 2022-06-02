let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]
function Transpose(matrix) {
  let transposematrix = []
  for (let i = 0; i < matrix.length; i++) {
    let rowmatrix = []
    for (let j = 0; j < matrix[i].length; j++) {
      rowmatrix.push(matrix[j][i])
    }
    transposematrix.push(rowmatrix)
  }
  return transposematrix
}
console.log(Transpose(matrix))
