let s = "XLIV"
let values = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }

function RomanToInteger(s) {
  let result = 0
  //   let split = s.split("")
  //   console.log(s.length)
  //   console.log(split.length)
  for (let i = 0; i < s.length; i++) {
    let curr = values[s[i]] //here 1
    // console.log(values["I"])  value =1
    // console.log(curr)
    let nxt = values[s[i + 1]] //here 5
    // console.log(s[i + 1])
    if (curr < nxt) {
      result += nxt - curr //IV -> 5-1=4
      i++
    } else {
      result += curr 
    }
  }
  return result
}
console.log(RomanToInteger(s))

function Roman(s) {
  let sum = 0
  for (let i = 0; i < s.length; i++) {
    let curr = values[s[i]]
    let nxt = values[s[i + 1]]
    if (curr < nxt) {
      sum += nxt - curr
      i++
    } else {
      sum += curr
    }
  }
  return sum
}
// console.log(Roman(s))
