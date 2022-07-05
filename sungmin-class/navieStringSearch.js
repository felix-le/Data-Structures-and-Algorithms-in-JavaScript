function naiveSearch(long, short) {
  var count = 0;

  for (var i = 0; i < long.length; i++) {
    for (var j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) {
        // don't understand
        console.log('🚀 ', long[i], short[j], long[i + j]);
        console.log('break');
        break;
      }

      if (j === short.length - 1) {
        `console.log('🚀 ', long[i], short[j], long[i + j]);`;
        console.log('found j', j);
        count++;
      }
    }
  }
  return count;
}

naiveSearch('lorie loled', 'lol');
