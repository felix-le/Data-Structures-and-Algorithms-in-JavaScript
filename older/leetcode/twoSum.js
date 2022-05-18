/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function (nums, target) {
  let map = new Map();

  for(let i = 0; i<nums.length; i++) {
      let num = nums[i];
      if(map.get(num) === undefined) map.set(target-num, i);
      else return [map.get(num), i];
  }
};
const nums = [0,4,3,0]
console.log("🚀 ~ file: twoSum.js ~ line 25 ~ twoSum(nums, 9)", twoSum(nums, 0))



const input = [2, 2, 3, 4];
// because 2 + 4 = 6

// way 1
const twoSum = function (nums, target) {
  const remainders = {};  
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num in remainders) {
      return [remainders[num], i];
    }
    remainders[target - num] = i;
  }
};

const result = twoSum(input, 6);

console.log("result way 1: ", result);
