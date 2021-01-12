/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

  let length = digits.length;
  let carry = 1;
  for (let i = length - 1; i >= 0; i--) {
      let num = digits[i] + carry;
      carry = 0;
      if (num > 9) {
          num -= 10;
          carry = 1;
      };
      digits[i] = num;
  };
  return carry ? [1, ...digits] : digits;
};
const digits = [0]
plusOne(digits)