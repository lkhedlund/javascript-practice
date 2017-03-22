const getCharacter = (function(sentence) {

  function count(sentence) {
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

  function indicies(sentence) {
    let indexPositions = {};
    sentence = sentence.replace(/\s/g, '');

    for (index in sentence) {
      let letter = sentence[index];
      if (indexPositions[letter] !== undefined) {
        indexPositions[letter].push(index);
      } else {
        indexPositions[letter] = [index];
      }
    }

    return indexPositions;
  }

  return {
    count: count,
    indicies: indicies,
  }
})();

console.log( getCharacter.count(process.argv[2]) );
console.log( getCharacter.indicies(process.argv[2]) );
