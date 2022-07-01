// function isPalindrome(str) {
//   const strArr = Array.from(str);

//   if (strArr.length % 2 === 0) {
//     console.log('it is a even number ==> no middle');
//     return false;
//   } else {
//     const middle = Math.floor(strArr.length / 2);
//     for (let i = 0; 0 <= i < middle; i++) {
//       if (strArr[middle - 1] === strArr[middle + 1]) {
//         return true;
//       } else {
//         return false;
//       }
//     }
//   }
// }
// function isPalindrome(str) {
//   const strArr = Array.from(str);

//   let left = 0;
//   let right = strArr.length - 1;

//   while (left < right) {
//     if (strArr[left] === ' ' && strArr[right] === ' ') {
//       left++;
//       right--;
//     } else if (strArr[right] === ' ') {
//       right--;
//     } else if (strArr[left] === ' ') {
//       left++;
//     }
//     if (strArr[left] !== ' ' && strArr[right] !== ' ') {
//       let result = strArr[left] === strArr[right];

//       if (result === true) {
//         left++;
//         right--;
//       } else {
//         console.log('false');
//         return false;
//       }
//     }
//   }
//   console.log('true');
//   return true;
// }
var isAlpha = function (ch) {
  return /^[A-Z]$/i.test(ch);
};

function isPalindrome(str) {
  const strArr = Array.from(str.toLowerCase());

  let left = 0;
  let right = strArr.length - 1;
  let checkLeft = isAlpha(strArr[left]);
  let checkRight = isAlpha(strArr[right]);
  while (left < right) {
    if (checkLeft === false && checkRight === false) {
      left++;
      right--;
    } else if (checkRight === false) {
      right--;
    } else if (checkLeft === false) {
      left++;
    }
    if (isAlpha(strArr[left]) === true && isAlpha(strArr[right]) === true) {
      let result = strArr[left] === strArr[right];
      if (result === true) {
        left++;
        right--;
      } else {
        return false;
      }
    }
  }
  return true;
}
isPalindrome('A bb A');
