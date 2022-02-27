const chalk = require("chalk");

const validator = require("validator");

const getNotes = require("./notes.js");

const notes = getNotes();

console.log(notes);

console.log(validator.isEmail("tanimara@email.com"));
console.log(validator.isURL("https://anthropovixen.github.io/tanimarasantos/"));

console.log(chalk.blue.bold.inverse("Success!"));

console.log(process.argv);
