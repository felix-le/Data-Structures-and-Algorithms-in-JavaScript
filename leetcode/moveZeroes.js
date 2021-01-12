/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */



//  A, B
// if A === 0 ==> move B len A
var moveZeroes = function(nums) {
  const len = nums.length;

  for(let i = 0; i < len; i++) {
    for(let j = i + 1; j < len; j++) {
      let zero = nums[i];
      let other = nums[j];
      if(zero === 0 && other !== 0){
        nums[j] = zero;
        nums[i] = other;
      }
    }
  }
  return nums;
};
const arr = [0,1,0,3,12,0,2,0,4,0,1,0,0]
console.log(moveZeroes(arr))