let containsDuplicate = function(nums) {
  return (new Set(nums).size !== nums.length)
};

const arr = [1,1,1,3,3,4,3,2,4,2]

function hasDuplicates(array) {
  let valuesSoFar = Object.create(null);

  for (let i = 0; i < array.length; ++i) {
      let value = array[i];
      if (value in valuesSoFar) {
          return true;
      }
      valuesSoFar[value] = true;
      console.log("🚀 ~ file: containsDuplicate.js ~ line 9 ~ hasDuplicates ~ valuesSoFar", valuesSoFar)
  }
  return false;
}


hasDuplicates(arr)