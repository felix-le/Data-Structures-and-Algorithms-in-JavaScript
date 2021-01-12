/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const alphanum = s.toLowerCase().replace(/[\W_]+/g, '');

  return alphanum.split('').every((char,i)=> {
    return char === alphanum[alphanum.length - i - 1];
  })
};
const str ="A man, a plan, a canal: Panama ____ ";
console.log("🚀 ~ file: palindrome.js ~ line 13 ~ isPalindrome(str)", isPalindrome(str))

