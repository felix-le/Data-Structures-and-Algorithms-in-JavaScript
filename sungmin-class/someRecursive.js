// Function someRecursive(arr, ()=>{});

// output: callback return true if a single value in the array is true else false

// const isOdd = val => val % 2 !== 0;

// someRecursive([1, 2, 3, 4], isOdd); // true
// someRecursive([4, 6, 8, 9], isOdd); // true
// someRecursive([4, 6, 8], isOdd); // false
// someRecursive([4,6,8], val=> val > 10); // false

function someRecursive(nums, callback) {
  if (nums.length === 0) {
    return false;
  }

  if (callback(nums[0])) return true;

  return someRecursive(nums.slice(1), callback);
}
