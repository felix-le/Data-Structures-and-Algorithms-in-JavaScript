// function sliding window

// function maxSubarraySum

// input []@Number, n = []@subArray.length

function maxSubarraySum(arr, num) {
  // if n > arr.length => null

  if (n > arr.length) {
    return null;
  }

  // if n <= 0 ==> null
  if (n <= 0) {
    return null;
  }

  let maxSum = 0;
  let tempSum = 0;
  // loop 1 to get value 0 to n -1 index element of array
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  //
  tempSum = maxSum;
  // num = 3 ==> tempSum = arr[0] + arr[1] + arr[2]

  // ==> get the value from 0 -> n - 1 of index element in arr ==> first maxSum

  for (let i = sum; i < arr.length; i++) {
    // loop 2
    // get value from n -> n + 1 -> arr.length - 1
    // arr.length = 7 => i = 3, 4, 5, 6
    tempSum = tempSum - arr[i - num] + arr[i];
    // loop 1
    //  i = 3 ==> tempSum = (arr[0] + arr[1] + arr[2]) - arr[3 - 3] + arr [3] ==> arr[1] + arr[2] +arr[3]
    // loop 2
    // i = 4 ==> tempSum = (arr[1] + arr[2] + arr[3]) - arr [ 4-1] + arr[4]
    maxSum = Math.max(maxSum, tempSum);
    // loop 1
    // compare maxSum and tempsum get the max Sum
  }

  return maxSum;
}
