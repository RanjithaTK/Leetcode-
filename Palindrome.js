let num = 121

function IsPalindrome(num) {
  let number = Math.abs(num)
  if (num === number) {
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
