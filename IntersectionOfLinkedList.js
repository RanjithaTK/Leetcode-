let listA = [4, 1, 8, 4, 5]
let listB = [5, 6, 8, 4, 5]
function intersection(headA, headB) {   //nodes will have reference to the current node and the nxt node as well
  if (headA === null || headB === null) {
    return null
  }
  let pointer1 = headA  //assigning
  let pointer2 = headB
  while (pointer1 !== pointer2) {  //generally if pointer1 !=pointer2, it will b redirected to the nxt node
    pointer1 = pointer1.next
    pointer2 = pointer2.next

    if (pointer1 === pointer2) {   //after a certain loops if pointer1 has eql to 2 , then returns pointer1
      return pointer1
    }
    if (pointer1 === null) {  //if either of pointer1 or 2 has bcm out of the list, ie pointing to null then it will redirected to the other linked list and vice versa
      pointer1 = headB
    }
    if (pointer2 === null) {
      pointer2 = headA
    }
  }
  return pointer1
}
console.log(intersection(headA, headB))

////////////////////////////////////////////

// var getIntersectionNode = function(headA, headB) {
//     let a = headA, b = headB
//     while (a !== b) {
//         a = !a ? headB : a.next
//         b = !b ? headA : b.next
//     }
//     return a

// };
