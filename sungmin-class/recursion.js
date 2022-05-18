// sum the number from 0 to n using recursion
const recursionSum = (n) => {
  if (n === 0) {
    return 0;
  }
  return n + recursionSum(n - 1);
};

console.log(
  '🚀 ~ file: recursion.js ~ line 9 ~ recursionSum(5)',
  recursionSum(10)
);
