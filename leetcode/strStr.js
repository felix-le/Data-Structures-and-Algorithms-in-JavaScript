/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  let stackStr = haystack.toLowerCase().replace(/[\W_]+/g,'');
  let needleStr = needle.toLowerCase().replace(/[\W_]+/g,'');

  if(stackStr.length) return 0;

  if(!needleStr.length) return 0;

  if(!haystack.includes(needle)) {return -1}
  else{
    return haystack.indexOf(needle);
  }
};
let haystack = "aaaaa", needle = "";
console.log(strStr(haystack, needle))