// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str){
  debugger;
  return str.split('').reduce((rev, char) => char + rev, '');
}
reverse('abcccc1234')
module.exports = reverse;

// function reverse(str) {
//   let reversed ='';
//   if(str === ''){
//     return;
//   }else{
//     for (let char of str){
//       reversed = char + reversed;
//     }
//   }
//   return reversed;
// }


// function reverse(str){
//   return str.split('').reduce((reversed, character)=>{
//     return character + reversed;
//   },'');
// }

// Debugg
/**
 * cd "folder path" 
 * node inspect index.js
 * c + 'enter'
 * repl
 * str
 * copy code for debugger
 * check result
*/ 
