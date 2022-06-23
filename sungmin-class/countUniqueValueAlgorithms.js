// implement a function called countUniqueValues.
// Given a sorted array, count the number of unique values in the array.
// There can be negative numbers in the array, but it will always be sorted.
// countUniqueValues([1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0

// With learning algorithms
function countUniqueValueAlgorithms(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      // swapped two element are nearby
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
const testingArr = [
  0, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 5, 6, 6, 6,
  7, 7, 7, 12, 12, 12, 13, 23, 23, 32, 34, 43, 44, 45, 45, 45, 56, 57, 65, 67,
  88, 232, 345, 434, 456, 456, 567, 567, 567, 623, 723, 756, 876, 3423, 5345,
  5675, 6756, 34235, 34534, 6567567,
];

var t3 = performance.now();
countUniqueValueAlgorithms(testingArr);
var t4 = performance.now();
console.log(
  `Call to countUniqueValueAlgorithms took ${(t4 - t3) / 1000} second.`
);
