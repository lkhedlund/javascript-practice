const password = process.argv[2];

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

function createPassword(password) {
  let newPassword = '';

  for (i = 0; i < password.length; i++) {
    newPassword += obfuscate(password[i]);
  }
  return newPassword;
}

console.log( createPassword(password) );
