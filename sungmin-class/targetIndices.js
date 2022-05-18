//You are given a 0-indexed integer array nums and a target element target.

// A target index is an index i such that nums[i] == target.

// Return a list of the target indices of nums after sorting nums in non-decreasing order. If there are no target indices, return an empty list. The returned list must be sorted in increasing order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {
  var result = [];
  var sorted = nums.sort((a, b) => a - b);
  var index = 0;
  for (var i = 0; i < sorted.length; i++) {
    if (sorted[i] === target) {
      result.push(index);
    }
    index++;
  }
  return result;
};
