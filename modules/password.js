const passwordObfuscator = (function(password) {
  function obfuscate(letter) {
    const rules = {
      'a': '4',
      'e': '3',
      'o': '0',
      'l': '1',
    }

    if (rules[letter] === undefined) {
      return letter;
    } else {
      return rules[letter];
    }
  }

  function convertPassword(password) {
    let newPassword = '';

    for (i = 0; i < password.length; i++) {
      newPassword += obfuscate(password[i]);
    }
    return newPassword;
  }

  return {
    convert: convertPassword,
  }
})();

console.log(passwordObfuscator.convert(process.argv[2]));
