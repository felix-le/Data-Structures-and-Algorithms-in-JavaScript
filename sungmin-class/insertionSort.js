function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];

    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
      arr[j] = currentVal;
    }
  }
  console.log(arr);
  return arr;
}

const arr = [2, 1, 3, 5, 4, 10, 21, 20, 100, 30, 40, 60];

insertionSort(arr);
