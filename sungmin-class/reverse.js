function reverse(str) {
  const strArr = Array.from(str);
  let newArr = [];
  for (let i = strArr.length - 1; i >= 0; i--) {
    newArr.push(strArr[i]);
  }
  return newArr.join('');
}
reverse('hello');
