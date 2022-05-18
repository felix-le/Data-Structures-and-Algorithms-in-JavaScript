/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  return clearString(s) === clearString(t)
};

function clearString(str){
  return str.replace(/[^\w]+/g, '').toLowerCase().split('').sort().join('');
}