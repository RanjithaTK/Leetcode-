let x = 121

function IsPalindrome(x) {
  let number = Math.abs(x)
  if (x === number) {
    let reverse = Number(String(number).split("").reverse().join(""))
    if (reverse === number) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}
console.log(IsPalindrome(num))
