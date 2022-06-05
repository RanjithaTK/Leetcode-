let List1 = [1, 2, 4]
let List2 = [1, 3, 4]
function mergeTwoArrays(List1, List2) {
  let array = [...List1, ...List2]
  array.sort(function (a, b) {
    return a - b
  })

  return array
}
console.log(mergeTwoArrays(List1, List2))
