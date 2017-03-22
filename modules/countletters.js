const countLetters = (function(sentence) {

  function countIn(sentence) {
    let totalCount = {};
    sentence = sentence.replace(/\s/g, '');

    for (index in sentence) {
      let letter = sentence[index];
      if (totalCount[letter] !== undefined) {
        totalCount[letter] += 1;
      } else {
        totalCount[letter] = 1;
      }
    }

    return totalCount;
  }

  return {
    countIn: countIn,
  }
})();

console.log( countLetters.countIn(process.argv[2]) );
