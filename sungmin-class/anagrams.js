const str1 = 'helloa';
const str2 = 'holle';

// check the characters of 1 is the same with str2

// check length str1 and str2
// all of them are lowercase

// No need to order => use object with access O(1), fast access

function checkSame(str1, str2) {
  // if the length is not the same, return false
  if (str1.length !== str2.length) {
    return false;
  }
  // create objects to store the characters of str1 and str2
  // key: character, value: number of times
  const obj1 = {};
  const obj2 = {};
  // loop through str1 and str2
  // if the character is not in the object, add it
  // if the character is in the object, add 1 to the value
  for (let i = 0; i < str1.length; i++) {
    obj1[str1[i]] = obj1[str1[i]] + 1 || 1;
    obj2[str2[i]] = obj2[str2[i]] + 1 || 1;
  }

  // loop through the object and check if the value is the same
  // if the value is not the same, return false
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

console.log(checkSame(str1, str2));
