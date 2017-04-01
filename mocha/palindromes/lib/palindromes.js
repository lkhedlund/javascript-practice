function isPalindrome(s) {
  let string = s.split(' ').join('');

  for (let i = 0; i < string.length; i++)
    if (string[i] !== string[string.length - i - 1])
      return false;
  return true;
}

module.exports = isPalindrome;
