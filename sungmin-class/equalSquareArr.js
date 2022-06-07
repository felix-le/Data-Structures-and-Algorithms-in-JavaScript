const squareArr = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);

    if (correctIndex === -1) {
      return false;
    }

    arr2.splice(correctIndex, 1);
  }
  return true;
};

const sample1 = [
  1, 11, 19, 25, 26, 27, 121, 144, 144, 15, 161, 55, 66, 77, 934, 634, 2, 4, 6,
  123, 1235, 1222233, 544334, 677656, 8902324, 234234, 68,
];
// const newArr = [];
// for (let i = 0; i < sample1.length; i++) {
//   newArr.push(sample1[i] ** 2);
// }
// console.log('🚀 ~ file: equalSquareArr.js ~ line 22 ~ sample1', newArr);

const sample2 = [
  1, 121, 361, 625, 676, 729, 14641, 20736, 20736, 225, 25921, 3025, 4356, 5929,
  872356, 401956, 4, 16, 36, 15129, 1525225, 1493853506289, 296299503556,
  459217654336, 79251372600976, 54865566756, 4624,
];

var t1 = performance.now();
squareArr(sample1, sample2);

var t2 = performance.now();
console.log(`Call to equalSquare1 took ${(t2 - t1) / 1000} second.`);
