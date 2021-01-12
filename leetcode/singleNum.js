/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let eleMap = {};
  if(nums.length === 1){
    return nums[0];
  }

  for(let ele of nums){
    eleMap[ele] = eleMap[ele] + 1 ||  1;
  }
  for(let key in eleMap){
    if(eleMap[key] ===1){
      return key;
    }
  }
};
const nums =  [2,2,1]
console.log(singleNumber(nums))