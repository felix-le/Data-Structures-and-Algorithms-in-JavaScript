//accept a base and exponent.
// return the power of the base to the exponent

// mimic of Math.pow()

// function power(base, exponent) {
//   if (exponent === 0) return 1;

//   return base * power(base, exponent - 1);
// }
// console.log(power(2, 0));
// console.log(power(2, 2));
// console.log(power(2, 4));

// ====

// faction factorial - input : a number, return : the factorial of that number

// 4! = 4*3*2*1
// 0! = 1

// function factorial(n) {
//   if (n === 0) return 1;

//   return n * factorial(n - 1);
// }

// // factorial(1) //1
// console.log('🚀 ~ file: mathPow.js ~ line 29 ~ factorial(1) ', factorial(1));
// // factorial(2) //2
// console.log('🚀 ~ file: mathPow.js ~ line 31 ~ factorial(2)', factorial(2));
// // factorial (4) // 24
// console.log('🚀 ~ file: mathPow.js ~ line 33 ~  factorial (4) ', factorial(4));
// // factorial 7 // 5040
// console.log('🚀 ~ file: mathPow.js ~ line 35 ~  factorial 7 ', factorial(7));

// ====

// functionOfArray - input []@Number
// Return the product of them all

// function productOfArray(arr) {
//   if (arr.length === 0) return 1;

//   return arr[0] * productOfArray(arr.slice(1));
// }

// // productOfArray([1,2,3]) //6
// console.log('🚀 ~ file:  1,2,3])', productOfArray([1, 2, 3]));
// // productOfArray([1,2,3, 10]) //60
// console.log('🚀 ~ file: m ) ', productOfArray([1, 2, 3, 10]));

// ====

// recursiveRange

// n @Number
// return @Number = sum from 0 to n

// function recursiveRange(n) {
//   if (n === 0) return 0;

//   return n + recursiveRange(n - 1);
// }
// console.log(
//   '🚀 ~ file: mathPow.js ~ line 65 ~ recursiveRange(6)',
//   recursiveRange(6)
// );
// console.log(
//   '🚀 ~ file: mathPow.js ~ line 65 ~ recursiveRange(6)',
//   recursiveRange(10)
// );

// ====

// function fib
// input: @Number

// output: nth number in Fibonacci sequence.

// Fibonacci = 1,1,2,3,5,8 - where every number thereafter is equal to the sum of the previous wo numbers.
// O(1) - time
// function fib(n) {
//   var A = (1 + Math.sqrt(5)) / 2,
//     B = (1 - Math.sqrt(5)) / 2,
//     fib = (Math.pow(A, n) - Math.pow(B, n)) / Math.sqrt(5);
//   return Math.ceil(fib);
// }

// O(n) O(n)
// function fib(n) {
//   if (n <= 2) return 1;
//   return fib(n-1 ) + fib(n-2)
// }

// O(1) space complexity
