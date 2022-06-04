let s = "()[]{}"
const isValid = function (s) {
  const stack = []
  const closings = {
    "(": ")",
    "{": "}",
    "[": "]",
  }

  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(closings[s[i]]) //identifies the closing tag corresponding to each opening ones in s and pushes to stack
      //closings[s[i]] can b ")","}","]"
      //   console.log(stack)
      continue
    }

    const requiredElement = stack.pop()
    //removes the lastmost element of array and now in the hand we have popped out element
    //compares each popped element with "}","]",")"
    if (s[i] !== requiredElement) return false
    
  }

  if (stack.length > 0) return false

  return true
}
console.log(isValid(s))
