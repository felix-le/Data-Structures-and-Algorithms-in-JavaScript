### Reduce
```bash
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10
```

### every

```bash
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true


function palindrome(str) {
  return str.split('').every((char, i) =>{
    return char === str[str.length - i - 1];
  })
}
```

## for loop
  #### for ... in
```bash

const shark = {
  species: "great white",
  color: "white",
  numberOfTeeth: "Infinity",
}

# Print property names of object
for (attribute in shark){
  console.log(attribute)
}

#output
# species
# color
# numberOfTeeth

#Print property values of object
for (attribute in shark){
  console.log(shark[attribute]);
}
# Output
# great white
# white
# Infinity
```
  #### for .... of

```bash
let sharks = [ "great white", "tiger", "hammerhead" ];

# Print out each type of shark

for (let shark of sharks){
  console.log(shark)
}

# Output
# great white
# tiger
# hammerhead

# // Loop through both index and element
for (let [index, shark] of sharks.entries()) {
    console.log(index, shark);
}


# Output
# 0 'great white'
# 1 'tiger'
# 2 'hammerhead'
```


# dividing 
--- Directions
Given an array and chunk size, divide the array into many subarrays
where each subarray is of length size
--- Examples
chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

```bash
function chunk(array, size) {
  const chunked = [];
  for (let element of array) {
    const last = chunked[chunked.length - 1];
    if(!last || last.length === size) {
      chunked.push([element]);
    }else{
      last.push(element);
    }
  }
  return chunked;
}
console.log(chunk([1, 2, 3, 4, 5],3))
```


### Remove special symphony 
```bash
let char of str.replace(/[^\w]/g, '').toLowerCase()
```


### using slice
```bash
# // --- Directions
# // Write a function that accepts a string.  The function should
# // capitalize the first letter of each word in the string then
# // return the capitalized string.
# // --- Examples
# //   capitalize('a short sentence') --> 'A Short Sentence'
# //   capitalize('a lazy fox') --> 'A Lazy Fox'
# //   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const words = [];

  for (let word of str.split(' ')){
    words.push(word.charAt(0).toUpperCase() + word.slice(1));
  }

  return words.join(' ');
}
```


### render staircase

<!-- // --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####' -->


```bash
function steps(n) {
  for(let row = 0; row < n; row++) {
    let stair = '';
    for(let col = 0; col < n; col++) {
      if(col <= row){
        stair += '#'
      } else{
        stair += ' ';
      }
    }
    console.log(stair)
  }
}
```
### pyramid
// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
```bash
function pyramid(n, row = 0, level ='') {
  if (row === n) {
    return;
  }

  if(level.length === 2* n-1){
    console.log(level);
    return pyramid(n, row + 1)
  }

  const midpoint = Math.floor((2*n-1)/2);
  let add;

  if(midpoint - row <= level.length && midpoint + row >= level.length){
    add = '#'
  } else{
    add = ' ';
  }

  pyramid(n, row, level + add)
}

```



### max Char
// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0
```bash
function vowels(str) {
  let chars = {};
  let numberVowel = 0;
  const  clearString = str.replace(/[^\w]/g, '').toLowerCase();
  for(let char of clearString){
    if(char === 'a' || char ==='e' || char === 'i' || char === 'o' || char === 'u'){
      numberVowel = numberVowel + 1 || 1;
      chars[char] = chars[char] + 1 || 1;
    }
  }
  console.log("🚀 ~ file: index.js ~ line 12 ~ vowels ~ chars", chars)

  return numberVowel;
}
```

### includes
```bash
function vowels(str){
  let counter = 0;
  let checker = ['a','e', 'i', 'o', 'u'];
  for (let char of str.toLowerCase()){
    if(checker.includes(char)){
      counter++;
    }
  }
  return counter;
}



function vowels(str){
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

```