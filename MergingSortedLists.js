// let List1 = [1, 2, 4]
// let List2 = [1, 3, 4]
// function mergeTwoArrays(List1, List2) {
//   let array = [...List1, ...List2]
//   array.sort(function (a, b) {
//     return a - b
//   })

//   return array
// }
// console.log(mergeTwoArrays(List1, List2))
let l1 = [1, 2, 4]
let l2 = [1, 3, 4]

var mergeTwoLists = function (l1, l2) {
  // If either list is empty, return the other list's node
  if (l1 == null) return l2
  if (l2 == null) return l1

  // If l1 is lower
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)//1,(2,3),(4,3)
    return l1                           //2          
  }
  // If l2 is lower
  else {
    l2.next = mergeTwoLists(l1, l2.next) //(1 3),
    return l2                             //1    3
  }
}
