let nums = [3, 0, 1]

let max = nums.length
let arr = [...Array(max + 1).keys()]
const spreaded = [...nums, ...arr]
spreaded.filter((l) => {
  if (!(nums.includes(l) && arr.includes(l))) {
    console.log(l)
  }
})

// let max = Math.max(...nums)
