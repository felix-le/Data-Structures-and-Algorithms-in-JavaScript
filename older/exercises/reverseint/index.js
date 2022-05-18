// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n){
  const reversed = n.toString().split('').reverse().join('');
  return parseInt(reversed) * Math.sign(n);
}



module.exports = reverseInt;



// function reverseInt(n) {
//   if(n >= 0){
//     return parseInt(n.toString().split('').reduce((rev, char) => char + rev, ''));
//   } else{
//     const m = n*(-1);
//     return parseInt(m.toString().split('').reduce((rev, char) => char + rev, '')*(-1));
//   }
// }

// function reverseInt(n){
//   const reversed = n.toString().split('').reverse().join('');
//   return parseInt(reversed) * Math.sign(n);
// }