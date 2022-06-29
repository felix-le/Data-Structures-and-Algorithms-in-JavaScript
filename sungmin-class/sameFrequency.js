// sample Input
// sameFrequency(182,281)
// sameFrequency(34,14)
// sameFrequency(3589578,5879385)
// sameFrequency(22,222)

function sameFrequency(num1, num2) {
  // if ([...str1].length !== [...str2].length) return false;
  const str1 = num1.toString();
  const str2 = num2.toString();
  if ([...str1].length !== [...str2].length) return false;

  const obj1 = {};
  const obj2 = {};
  for (let val of str1) {
    obj1[val] = (obj1[val] || 0) + 1;
  }
  for (let val of str2) {
    obj2[val] = (obj2[val] || 0) + 1;
  }
  for (let key in obj1) {
    if (!(key in obj2)) {
      return false;
    }

    if (obj2[key] !== obj1[key]) {
      return false;
    }
  }
  return true;
}
console.log(sameFrequency(3589578, 5879385));
