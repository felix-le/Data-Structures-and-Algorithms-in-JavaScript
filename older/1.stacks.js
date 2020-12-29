let letters = []; //this is our stack

const word = "hello";

let rword = "";



// - push: for placing data onto a stack
// - pop: remove the top data from a stack
// - peek: displaying the top element of a stack
// - length: size how many elements in a stack
// put letters of word into the stack
for (let i = 0; i <word.length; i++){
  letters.push(word[i]);
}

// pop of the stack in reverse order
for (let i = 0; i < word.length; i++){
  rword += letters.pop();
}

console.log("🚀 ~ file: 1.stacks.js ~ line 6 ~ rword", rword)

if (rword === word){
  console.log(word + "is a palindrome");

} else {
  console.log(word + "is not a palindrome");
}