// function reverse(str) {
//   let newString = "";
//   if(str === ''){
//       return;
//   } else{
//       for(let i = str.length - 1; i >= 0; i--){
//           newString += str[i];
//       }
//   }
//   return(newString);
// }

function reverse2(str) {
 if(str === ''){
   return;
 }else{
   const newArr = str.split('');
   newArr.reverse();
   return newArr.join('');
 }
}


console.log(reverse2('1ab2cdddd'));