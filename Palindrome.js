let num = -121
let number = Math.abs(num)
if (num === number) {
  let reverse = Number(String(number).split("").reverse().join(""))
  reverse === number ? console.log(true) : console.log(false)
} else {
  console.log(false)
}
