let str = ["flower", "flow", "flight"]
function longestCommonPrefixes(str) {
  let prefix = ""
  if (str.length === 0) return prefix
  for (let i = 0; i < str[0].length; i++) {
    //str[0] is bcz no other string must b greater than the first one else no common prefx
    //str[0][i] means gives each letter, i=0,1,2,...
    let char = str[0][i] // f  l  o  w  e  r
    // console.log(char)
    for (let j = 1; j < str.length; j++) {
      //   console.log(str[j][i])
      if (str[j][i] !== char) {
        return prefix
      }
    }
    prefix += char
  }
  return prefix
}
console.log(longestCommonPrefixes(str))

// ////another way

// // var longestCommonPrefix = function(strs) {
// //     let prefix = ""
// //     if(strs === null || strs.length === 0) return prefix

// //     for (let i=0; i < strs[0].length; i++){
// //         const char = strs[0][i] // loop through all characters of the very first string.

// //         for (let j = 1; j < strs.length; j++){
// //           // loop through all other strings in the array
// //             if(strs[j][i] !== char) return prefix
// //         }
// //         prefix = prefix + char
// //     }

// //     return prefix
// // }
//
