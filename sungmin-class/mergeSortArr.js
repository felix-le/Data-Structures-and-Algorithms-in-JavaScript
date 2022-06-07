/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n,
  // representing the number of elements in nums1 and nums2 respectively.
  // Merge nums1 and nums2 into a single array sorted in non-decreasing order.
  // The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
};

const merge2 = (nums1, m, nums2, n) => {
  // based on m to get an array of nums1

  nums1 = nums1.splice(0, m);
  // based on n to get an array of nums2

  nums2 = nums2.splice(0, n);

  // ** merge nums1 and nums2 into nums1

  for (let i = m; i >= 0; i--) {
    // if last elements of nums1 is 0, then we will remove it on the end of nums1
    let j = i - 1;

    if (nums1[i] === 0) {
      nums1.pop();
      if (nums1[j] !== 0) {
        break;
      }
    }
  }
  nums1 = [...nums1, ...nums2].sort();
};

let nums1 = [1, 2, 3, 0, 0, 0, 0, 0],
  nums2 = [2, 5, 6];
merge(nums1, 3, nums2, 3);
console.log(nums1);
// let nums3 = [0],
//   m = 0,
//   nums4 = [1],
//   n = 1;
//   merge(nums3, 0, nums4, 1);
