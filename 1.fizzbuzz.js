// Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "Fizzbuzz".


for (let i = 1; i < 100; i++){
  if(i % 3 === 0 && i % 5 === 0){
    console.log('i % 3 & 5 ; fizzBuzz', i)
  } else if(i % 5 === 0){
    console.log('i % 5  ; buzz', i)
  } else if(i % 3 === 0){
    console.log('i % 3', i)
  } else{
    console.log(i);
  }
}