function binarySearch(arr, value) {
  let left = 0;
  let right = arr.length - 1;

  if (arr[left] > value) {
    return -1;
  }
  if (arr[right] < value) {
    return -1;
  }

  let middle = Math.floor((right + left) / 2); // create an new array

  while (arr[middle] !== value) {
    value < arr[middle] ? (right = middle - 1) : (left = middle + 1);

    middle = Math.floor((left + right) / 2);
  }
  return arr[middle] === value ? middle : -1;
}

const newArr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 22, 23, 24, 25, 28, 42, 46, 78, 80, 81, 90,
];

console.log(
  '🚀 ~ file: binarySearch.js ~ line 35 ~ binarySearch(newArr, 91)',
  binarySearch(newArr, 24)
);
