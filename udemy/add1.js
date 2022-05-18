// Suppose we want to write a function that calculates the sum of all numbers from 1 up to (and including) some number n
function addUpTo(n) {
  let total = 0;

  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
// check the performance before running the code:
var t1 = performance.now();

addUpTo(1000000000);
// check the performance after running the code:
var t2 = performance.now();
console.log(`Call to addUpTo1 took ${(t2 - t1) / 1000} second.`);
