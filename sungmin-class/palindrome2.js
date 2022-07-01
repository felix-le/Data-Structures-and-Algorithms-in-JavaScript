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

function isAlphaNumeric(str) {
  var code, i, len;

  for (i = 0, len = str.length; i < len; i++) {
    code = str.charCodeAt(i);
    if (
      !(code > 47 && code < 58) && // numeric (0-9)
      !(code > 64 && code < 91) && // upper alpha (A-Z)
      !(code > 96 && code < 123)
    ) {
      // lower alpha (a-z)
      return false;
    }
  }
  return true;
}

function isPalindrome(str) {
  const strArr = Array.from(str.toLowerCase());

  let left = 0;
  let right = strArr.length - 1;
  let checkLeftChar = isAlphaNumeric(strArr[left]);

  let checkRightChar = isAlphaNumeric(strArr[right]);

  while (left < right) {
    if (!checkLeftChar && !checkRightChar) {
      left++;
      right--;
    } else if (!checkLeftChar) {
      left++;
    } else if (!checkRightChar) {
      right--;
    }
    if (checkLeftChar && checkRightChar) {
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
console.log('🚀 ~ )', isPalindrome('A man, a plan, a canal: Panama'));
