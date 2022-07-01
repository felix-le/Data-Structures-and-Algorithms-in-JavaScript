function collectOdd(arr) {
  let result = [];

  function helper(helperInput) {
    // base case
    if (helperInput.length === 0) {
      return;
    }

    // recursive case
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }

  helper(arr);
  return result;
}

console.log('🚀 ~ file:);', collectOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
