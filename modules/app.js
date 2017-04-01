const getCharacter = require("./getcharacter.js");
const chalk = require("chalk");

console.log(chalk.bgBlue.bold('Practice Modules'));

console.log(chalk.yellow('Get Character Module'));
let sentenceCount = getCharacter.count(process.argv[2]);
let sentenceIndicies = getCharacter.indicies(process.argv[2]);
console.log(sentenceCount);
console.log(sentenceIndicies);
