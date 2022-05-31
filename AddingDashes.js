let nums = [3, 2, 2, 3, 2, 3]
let value = 3

function AddingDashes(nums, value) {
  let newNums = nums.map((num) => {
    if (num === value) {
      return "-"
    }
    return num
  })
  newNums.push(newNums.splice(newNums.indexOf("-"), 1)[0])
  return newNums
}
console.log(AddingDashes(nums, value))

// var arr = [3, 2, 2, 3]
// arr.push(arr.splice(arr.indexOf(3), 1)[0])
// console.log(arr)

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === value) {
//       nums[i] = "-"
//     }
//   }
