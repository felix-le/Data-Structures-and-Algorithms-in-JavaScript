// N is an integer within the range [1..2,147,483,647].

function solution(N) {
  let max = 2147483647;
  let min = 1;

  let maxGap = 0;

  // If N is less than 1 or greater than 2147483647, return 0.
  if (N < min || N > max) {
    console.log('N is less than 1 or greater than 2147483647.');
    return;
  }
  const gapArr = [];
  // convert the number to binary
  const binaryNum = N.toString(2);

  // Check each char
  for (let i = 0; i < binaryNum.length; i++) {
    if (binaryNum[i] == 1) {
      gapArr.push(i);
    }
  }
  // If only has one time 1 ==> no gaps
  if (gapArr.length === 1 || gapArr.length === 0) {
    return (maxGap = 0);
  }

  // create a for loop check the gap between each 1
  for (let i = 0; i < gapArr.length - 1; i++) {
    const gap = gapArr[i + 1] - gapArr[i];
    if (gap > maxGap) {
      maxGap = gap;
    }
  }
  if (maxGap === 0) {
    return;
  }

  return maxGap - 1;
}

solution(32);
