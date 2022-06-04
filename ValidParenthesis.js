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
      stack.push(closings[s[i]])
      continue
    }

    const requiredElement = stack.pop()

    if (s[i] !== requiredElement) return false
  }

  if (stack.length > 0) return false

  return true
}
console.log(isValid(s))
