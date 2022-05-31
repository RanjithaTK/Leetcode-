let s = "00110110"
let k = 2
function hasAllCodes(s, k) {
  if (k > s.length) {
    return false
  }
  const subStrings = new Set() //to get or define a new set,
  for (let i = k; i < s.length; i++) {
    //i=0, s.lenght =8, 1<8,
    subStrings.add(s.slice(i - k, i)) //adds whatver in the brkt with substring , s.slice(0,2)
  }
  return subStrings.size === 2 ** k
}
console.log(hasAllCodes(s, k))

// function hasAllCodes(s, k) {
//   let len = S.length,
//     count = 1 << K,
//     seen = new Uint8Array(count),
//     num = parseInt(S.slice(len - K + 1), 2) << 1
//   for (let i = len - K; ~i; i--) {
//     num = ((S.charAt(i) << K) + num) >> 1
//     if (!seen[num]) (seen[num] = 1), count--
//     if (!count) return true
//     if (i < count) return false
//   }
// }
