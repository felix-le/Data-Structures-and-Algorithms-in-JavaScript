/**
 * @param {string} s
 * @return {number}
 */


var myAtoi = function(s) {
  let filter = '0123456789+- '
  let res = 0
  let sign = 1
  for(let char of s){
      let index = filter.indexOf(char)
      if(index !== -1) {
          if(char === " ") continue
          if(filter[10] === "+") filter = filter.slice(0,10)
          if(char === "+") continue
          if(char === "-") { sign = -sign; continue }
          res = res*10 + index
      } else {
          break;
      }
  }
  res = res*sign
  if(res > 2**31-1) res = 2**31-1
  else if (res < -(2**31)) res = -(2**31)
  return res
};


function isCharALetter(char){
  return (/[a-zA-Z]/).test(char);
}
function isNumeric(s) {
  return !isNaN(s - parseFloat(s));
}
const str = 's  -2a sdf';

console.log("🚀 ~ file: stringToInt.js ~ line 53 ~ myAtoi(str)", myAtoi(str))
myAtoi(str)