function pivotHelper(arr, start = 0, end = arr.length - 1) {
  function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  let pivot = arr[start];

  let swapIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;

      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

const arr = [10, 3, 4, 1, 0, 9, 8, 6];
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivotHelper(arr, left, right);

    // left
    quickSort(arr, left, pivotIndex - 1);
    // right

    quickSort(arr, pivotIndex + 1, right);
  }
  console.log(arr);
  return arr;
}
quickSort(arr);
