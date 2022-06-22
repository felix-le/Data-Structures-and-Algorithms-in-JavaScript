const sample1 = [
  1, 11, 19, 25, 26, 27, 121, 144, 144, 15, 161, 55, 66, 77, 934, 634, 2, 4, 6,
  123, 1235, 1222233, 544334, 677656, 8902324, 234234, 68,
];

const sample2 = [
  1, 121, 361, 625, 676, 729, 14641, 20736, 20736, 225, 25921, 3025, 4356, 5929,
  872356, 401956, 4, 16, 36, 15129, 1525225, 1493853506289, 296299503556,
  459217654336, 79251372600976, 54865566756, 4624,
];
// 2 array
// Check if two arrays are equal square arrays
// using object function to check if two arrays are equal - we want to fast access, no need to be ordered

function isEqualSquareArr(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  const obj1 = {};
  const obj2 = {};

  for (let i = 0; i < arr1.length; i++) {
    if (obj1[arr1[i]]) {
      obj1[arr1[i]]++;
    } else {
      obj1[arr1[i]] = 1;
    }

    if (obj2[arr2[i]]) {
      obj2[arr2[i]]++;
    } else {
      obj2[arr2[i]] = 1;
    }
  }

  for (let key in obj1) {
    if (!(key ** 2 in obj2)) return false;
    if (obj2[key ** 2] !== obj1[key]) return false;
  }
  return true;
}

isEqualSquareArr([1, 2, 9, 2, 2, 5], [25, 4, 1, 81, 4, 4]);
