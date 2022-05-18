/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  if (x < (-1 * (2 ** 31)) || (x > (2 ** 31 - 1))) return 0;
  let result = (x < 0 ? -1 : 1) * Number(String(Math.abs(x)).split('').reverse().join('')); 
  if (result < (-1 * (2 ** 31)) || (result > (2 ** 31 - 1))) return 0;
  return result;
};

console.log("🚀 ~ file: reverseInt.js ~ line 12 ~ reverse(1534236469)", reverse(1534236469))
reverse(1534236469)