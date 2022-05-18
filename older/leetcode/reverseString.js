/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  for (let leftIndex = 0, rightIndex = s.length - 1; leftIndex < rightIndex; leftIndex++, rightIndex--) {
    let temp = s[leftIndex];
    s[leftIndex] = s[rightIndex];
    s[rightIndex] = temp;
  }

};
const arr =  ["h","e","l","l","o"]
reverseString(arr)

// way2
var reverseString2 = function(s) {
  return s.reduce((rev, char) => char + rev ).split('');
};
let arr2 =  ["h","e","l","l","o"]
console.log("🚀 ~ file: reverseString.js ~ line 27 ~ reverseString2(arr)", reverseString2(arr2))
