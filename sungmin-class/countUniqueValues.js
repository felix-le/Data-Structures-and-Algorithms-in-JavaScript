// implement a function called countUniqueValues.
// Given a sorted array, count the number of unique values in the array.
// There can be negative numbers in the array, but it will always be sorted.
// countUniqueValues([1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0

// without learning algorithms
function countUniqueValues(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let newArr = [];
  // work by an array method > push to a new array - this method, we do not use the clue "sorted array"
  for (let i = 0; i < arr.length; i++) {
    // if arr[i] doesn't include in newArr => push arr[i] into the newArr
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }

  return newArr.length;
}

const testingArr = [
  0, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 5, 6, 6, 6,
  7, 7, 7, 12, 12, 12, 13, 23, 23, 32, 34, 43, 44, 45, 45, 45, 56, 57, 65, 67,
  88, 232, 345, 434, 456, 456, 567, 567, 567, 623, 723, 756, 876, 3423, 5345,
  5675, 6756, 34235, 34534, 6567567,
];

var t1 = performance.now();
countUniqueValues(testingArr);
var t2 = performance.now();
console.log(`Call to countUniqueValues took ${(t2 - t1) / 1000} second.`);
