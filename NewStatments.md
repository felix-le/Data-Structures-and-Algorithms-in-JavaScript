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

