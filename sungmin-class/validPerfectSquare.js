// Given a positive integer num, write a function which returns True if num is a perfect square else False.

/**
 * @param {number} num
 * @return {boolean}
 */
// const isPerfectSquare = function (num) {
//   let left = 0;
//   let right = num;
//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);

//     if (mid * mid === num) {
//       return true;
//     } else if (mid * mid < num) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
//   return false;
// };
const isPerfectSquare = function (num) {
  if (num === 1) {
    return true;
  }

  const startNum = num.toString(2).length - 1;
  console.log(
    '🚀 ~ file: validPerfectSquare.js ~ line 30 ~ isPerfectSquare ~ num.toString(2)',
    num.toString(2)
  );

  for (let i = startNum; i < num; i++) {
    if (i * i === num) {
      return true;
    }
    if (i * i > num) {
      return false;
    }
    return false;
  }
};
isPerfectSquare(12);
