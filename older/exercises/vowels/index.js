// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str){
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}
module.exports = vowels;

// function vowels(str){
//   let counter = 0;
//   let checker = 'aeiou';
//   for (let char of str.toLowerCase()){
//     if(checker.includes(char)){
//       counter++;
//     }
//   }
//   return counter;
// }

// function vowels(str) {
//   let chars = {};
//   let numberVowel = 0;
//   const  clearString = str.replace(/[^\w]/g, '').toLowerCase();
//   for(let char of clearString){
//     if(char === 'a' || char ==='e' || char === 'i' || char === 'o' || char === 'u'){
//       numberVowel = numberVowel + 1 || 1;
//       chars[char] = chars[char] + 1 || 1;
//     }
//   }
//   console.log("🚀 ~ file: index.js ~ line 12 ~ vowels ~ chars", chars)

//   return numberVowel;
// }
