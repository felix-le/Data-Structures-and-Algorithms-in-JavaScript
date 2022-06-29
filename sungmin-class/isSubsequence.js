function isSubsequence(str1, str2) {
  if ((str1.length = 0)) {
    return true;
  }

  let i = 0;
  let j = 0;

  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}
