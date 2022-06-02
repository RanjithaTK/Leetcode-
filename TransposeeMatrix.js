let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]
function Transpose(matrix) {
  let transpose = []
  for (let i = 0; i < matrix.length; i++) {
    let col = []
    for (let j = 0; j < matrix[i].length; j++) {
      col.push(matrix[j][i])
    }
    transpose.push(col)
  }
  return transpose
}
console.log(Transpose(matrix))
