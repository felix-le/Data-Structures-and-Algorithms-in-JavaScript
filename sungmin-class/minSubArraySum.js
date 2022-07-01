// function minSubArrayLen ([]@Number > 0, n > 0 )
// output: number
// number is the minimal length of a contiguous subarray of which the sum >= n
// if number is null > return 0;

// =======

function minSubArrayLen(nums, sum) {
  // if num is null > return 0
  if (!sum) return 0;

  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    } else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    } else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}
