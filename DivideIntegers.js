function DivideIntegers(dividend, divisor) {
  let value = dividend / divisor
  if (value < 0) {
    return Math.ceil(value)
  } else {
    return Math.floor(value)
  }
}
console.log(DivideIntegers(7, -3))
// console.log(Math.floor(8.33))
// console.log(Math.ceil(-8.33))
