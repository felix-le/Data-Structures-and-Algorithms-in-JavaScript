// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const chars = {};
  let max = 0;
  let maxChar = 0;
  for(let char of str){
      chars[char] = chars[char] + 1 || 1;
  }

  for(let char in chars){
    if(chars[char] > max){
      max = chars[char];
      maxChar = char;
    }
  }  
  return maxChar;
}
console.log(maxChar('haynhieulam heh ehehehhe'))

module.exports = maxChar;

// const shark = {
//   species: "great white",
//   color: "white",
//   numberOfTeeth: Infinity
// }
// // Print property names of object
// for (attribute in shark) {
//   console.log(attribute);
// }
// Output
// species
// color
// numberOfTeeth



// Print property values of object
// for (attribute in shark) {
//   console.log(shark[attribute]);
// }

// Output
// great white
// white
// Infinity


// Initialize array of shark species
// let sharks = [ "great white", "tiger", "hammerhead" ];

// // Print out each type of shark
// for (let shark of sharks) {
//     console.log(shark);
// }