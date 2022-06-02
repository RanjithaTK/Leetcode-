// let nums = [1, 1, 1, 1, 1, 1]
// function RunningSum(nums) {
//   let output = []
//   let prev_elements = []
//   for (let i = 0; i < nums.length; i++) {
//     prev_elements.push(nums[i])
//     output.push(nums[i] + prev_elements.reduce((a, b) => a + b, 0) - nums[i])
//   }
//   return output
// }
// console.log(RunningSum(nums))
let nums = [1, 1, 1, 1, 1, 1]
function RunningSum(nums) {
  let ans = new Array(nums.length) // creates an empty array with length of 6 items
  //assigns first item of array to be 1
  ans[0] = nums[0]
  for (let i = 1; i < nums.length; i++) ans[i] = ans[i - 1] + nums[i]
  //   console.log(ans[-1])  ????????????? undefined?
  //adds up the previous item with current to return output array
  return ans
}
console.log(RunningSum(nums))

/////////////////////////////////////////////way2

function RunningSum(nums) {
  let ans = []
  sum = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    ans.push(sum)
  }
  return ans
}
