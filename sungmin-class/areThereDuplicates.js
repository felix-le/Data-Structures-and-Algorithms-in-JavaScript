// function areThereDuplicates(...args) {
//   const chars = {};

//   for (let char of args) {
//     if (!chars[char]) {
//       chars[char] = 1;
//     } else {
//       return true;
//     }
//   }
//   return false;
// }

// function areThereDuplicates(...args) {
//   // Two pointers
//   args.sort(function (a, b) {
//     return a > b ? 1 : -1;
//   });

//   let start = 0;
//   let next = 1;
//   while (next < args.length) {
//     if (args[start] === args[next]) {
//       return true;
//     }
//     start++;
//     next++;
//   }
//   return false;
// }

// function areThereDuplicates() {
//   let collection = {};
//   for (let val in arguments) {
//     collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
//   }
//   for (let key in collection) {
//     if (collection[key] > 1) return true;
//   }
//   return false;
// }

// function areThereDuplicates(...args) {
//   return new Set(args).size !== arguments.length;
// }

function areThereDuplicates() {
  const newArr = new Set(arguments);

  console.log(newArr.size);
  console.log(
    '🚀 ~ file: areThereDuplicates.js ~ line 50 ~ areThereDuplicates ~ arguments.length',
    arguments.length
  );

  return new Set(args).size !== arguments.length;
}

console.log(areThereDuplicates('a', 'b', 'c', 'd', 'a'));
