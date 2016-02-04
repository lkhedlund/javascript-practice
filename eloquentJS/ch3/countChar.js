/*
Write a function called countChar that takes a string as its first argument and a second argument that indicates the character that is to be counted. It returns a number that indicates how many of the character are in the string
*/

function countChar(string, char) {
  count = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === char) {
      count++;
    }
  }
  return count;
}

console.log(countChar("kakkerlak", "k"), countChar("Lovely bunch of coconuts", "o"));
