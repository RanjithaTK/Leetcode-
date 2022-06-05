let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]
function Transpose(matrix) {
  let transpose = []
  for (let i = 0; i < matrix[0].length; i++) {
    ///matrix[0] = [1,2,3] length =3, i=0 ,j=1
    let col = []
    for (let j = 0; j < matrix.length; j++) {
      col.push(matrix[j][i]) //[1][0]
    }
    transpose.push(col)
  }
  return transpose
}
//   var trans = matrix[0].map((row, r) => {
//     return matrix.map((col, c) => {
//       return matrix[c][r]
//     })
//   })
//   return trans
// }
console.log(Transpose(matrix))
// console.log(matrix[1])
