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
  let ans = new Array(nums.length)
  ans[0] = nums[0]
  console.log(ans)
  for (let i = 1; i < nums.length; i++) ans[i] = ans[i - 1] + nums[i]
  return ans
}
console.log(RunningSum(nums))
