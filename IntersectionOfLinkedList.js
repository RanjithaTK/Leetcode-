// let listA = [4, 1, 8, 4, 5]
// let listB = [5, 6, 8, 4, 5]
// function intersection(headA, headB) {
//   if (headA === null || headB === null) {
//     return null
//   }
//   let pointer1 = headA
//   let pointer2 = headB
//   while (pointer1 !== pointer2) {
//     pointer1 = pointer1.next
//     pointer2 = pointer2.next

//     if (pointer1 === pointer2) {
//       return pointer1
//     }
//     if (pointer1 === null) {
//       pointer1 = headB
//     }
//     if (pointer2 === null) {
//       pointer2 = headA
//     }
//   }
//   return pointer1
// }
// console.log(intersection(headA, headB))

////////////////////////////////////////////

var getIntersectionNode = function(headA, headB) {
    let a = headA, b = headB
    while (a !== b) {
        a = !a ? headB : a.next
        b = !b ? headA : b.next
    }
    return a
    
};