let words = ["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]
// for (let i = 0; i < words.length; i++) {
//   let Product = []
//   for (let j = 0; j < words.length; j++) {
//     if (words[i].substring(0, 1) !== words[j].substring(0, 1)) {
//       console.log(words[i].substring(0, 1), words[j].substring(0, 1))
//     }
//   }
// }

//     for(let z = 0;z<words)
//   }
//   let max = Math.max(...Product)
//   console.log(max)
// if (words[i] !== words[j]) {
//   console.log(words[i], words[j])
//   Product.push(words[i].length * words[j].length)
// }
// function compare(wordOne, wordTwo) {
//   return wordOne.substring(0) === wordTwo.substring(0)
// }
// console.log(compare("house", "nell"))

function compareWords(word1, word2) {
  for (let i = 0; i < word1.length; i++) {
    for (let j = 0; j < word2.length; j++) {
      if (word1[i] === word2[j]) {
        return true
      }
    }
  }
  return false
}
// console.log(compareWords("ranji", "buddy"))

function maxProduct(words) {
  let maxValue = 0
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (
        words[i].length * words[j].length > maxValue &&
        !compareWords(words[i], words[j])
      ) {
        maxValue = words[i].length * words[j].length
      }
    }
  }
  return maxValue
}
console.log(maxProduct(words))
