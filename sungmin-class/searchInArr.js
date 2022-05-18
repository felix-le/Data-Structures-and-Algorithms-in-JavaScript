/**
 * You must write an algorithm with O(log n) runtime complexity.
 * @param {number[]} nums // sorted in ascending order
 * @param {number} target // target number
 * @return {number} // index of the target number
 */
var search = function (nums, target) {
  // sorted in ascending order
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};
