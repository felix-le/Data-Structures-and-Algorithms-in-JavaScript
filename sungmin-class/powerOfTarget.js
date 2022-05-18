// Implement pow(x, n), which calculates x raised to the power n (i.e., xn).
// Input: x = 2.00000, n = 10
// Output: 1024.00000

// Input: x = 2.10000, n = 3
// Output: 9.26100

// Input: x = 2.00000, n = -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25
// function powerOfTarget(x, n) {
//   return Math.pow(x, n).toFixed(5);
// }

function powerOfTargetRecursion(x, n) {
  if (n === 0) {
    return 1;
  }
  if (n < 0) {
    return 1 / powerOfTargetRecursion(x, -n);
  }
  return x * powerOfTargetRecursion(x, n - 1);
}
console.log(
  '🚀 ~ file: powerOfTarget.js ~ line 24 ~ powerOfTargetRecursion',
  powerOfTargetRecursion(8.88023, 3)
);
// 8.88023
// 3
