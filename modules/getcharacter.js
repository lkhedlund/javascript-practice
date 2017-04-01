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

module.exports = {
  count: count,
  indicies: indicies,
};
