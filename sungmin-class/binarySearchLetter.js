/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
// const nextGreatestLetter = function (letters, target) {
//   let result = letters[0];
//   for (let i = 0; i < letters.length; i++) {
//     if (letters[i] > target) {
//       result = letters[i];
//       break;
//     }
//   }
//   return result;
// };

const nextGreatestLetter = function (letters, target) {
  let sorted = letters.sort((a, b) => a - b);
  //  use binary search to find the first element that is greater than target
  let left = 0;
  let right = sorted.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (sorted[mid] === target) {
      left = mid + 1;
    } else if (sorted[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return sorted[left] > target ? sorted[left] : sorted[0];
};

console.log(nextGreatestLetter(['c', 'f', 'j'], 'c'));
