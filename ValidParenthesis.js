let s = "()[]{}" //{[()}]
const isValid = function (s) {
  const stack = [] // [ "}","]", ")"]
  const closings = {
    "(": ")",
    "{": "}",
    "[": "]",
  }
  for (let i = 0; i < s.length; i++) {
    if (closings[s[i]]) {
      stack.push(closings[s[i]])
    } else {
      if (s[i] !== stack.pop()) {
        return false
      }
    }

    //s.charAt(i)="("
    //if closings has s.charAt(i), push value to stack
    //else check s.charaAt(i)=stack.pop() (if false return false)
    // return true outside loop
  }
  return true

  // for (let i = 0; i < s.length; i += 1) {
  //   if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
  //     stack.push(closings[s[i]]) //identifies the closing tag corresponding to each opening ones in s and pushes to stack
  //     //closings[s[i]] can b ")","}","]"
  //     //   console.log(stack)
  //     continue
  //   }

  //   const requiredElement = stack.pop()
  //   //removes the lastmost element of array and now in the hand we have popped out element
  //   //compares each popped element with "}","]",")"
  //   if (s[i] !== requiredElement) return false
  //   //compares the popped element ie last element with that in the s[i]
  // }
  // //we have to pop out all elements of the stack if anyone is left then length of stack !=0 and hence s has incmplt bracket
  // if (stack.length > 0) return false

  // return true
}
console.log(isValid(s))
