const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "body of note",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

// Create list command
yargs.command({
  command: "list",
  describe: "List the notes",
  handler() {
    console.log("Listing the notes");
  },
});

// Create read command
yargs.command({
  command: "read",
  describe: "Read the note",
  handler() {
    console.log("Reading the note");
  },
});

// add, remove, read, list
yargs.parse();
//console.log(yargs.argv);
