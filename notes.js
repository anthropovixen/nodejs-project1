const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
  // Load in the notes
  const notes = loadNotes();
  // Search through the notes until a match is found
  const duplicateNote = notes.find((note) => note.title === title);
  // if there is not match, then the new note will be added

  debugger;

  if (!duplicateNote) {
    // Change notes
    notes.push({
      title: title,
      body: body,
    });

    // Save notes
    saveNotes(notes);
    console.log(chalk.green.inverse("New note added!"));
    // if there is note with the same title, then the error message will be shown
  } else {
    console.log(chalk.red.inverse("Note title taken!"));
  }
};

// remove note method
const removeNote = (title) => {
  // load in the notes
  const notes = loadNotes();
  // filter through every message to remove note from notes
  const removeNote = notes.filter((note) => note.title !== title);
  // if notes is bigger than removeNote, then the note has been removed
  if (notes.length > removeNote.length) {
    console.log(chalk.green.inverse("Note removed"));
    // new notes has been saved
    saveNotes(removeNote);
    // if notes is not bigger than removeNote, then the note has not been found
  } else {
    console.log(chalk.red.inverse("No note found"));
  }
};

// List notes
const listNotes = () => {
  // load in notes
  const notes = loadNotes();
  // Message to print on console
  console.log(chalk.blue.inverse("Your notes"));
  // Loop through each note and write on console their titles
  notes.forEach((note) => {
    console.log(note.title);
  });
};

// Read notes
const readNote = (title) => {
  // Load in notes
  const notes = loadNotes();
  // Find notes that having matching titles
  const readNote = notes.find((note) => note.title === title);
  // if there is a matching title
  if (readNote) {
    // then, print title and body on console
    console.log(chalk.blue.inverse(readNote.title));
    console.log(readNote.body);
    // if there is not a matching title, then note is not found
  } else {
    console.log(chalk.red.inverse("Note not found!"));
  }
};

// Save notes
const saveNotes = (notes) => {
  // stringify data to transform into JSON format
  const dataJSON = JSON.stringify(notes);
  // write new data on file notes.json
  fs.writeFileSync("notes.json", dataJsON);
};

// loadNotes
const loadNotes = () => {
  // try to read data from notes.json
  // converting it into string
  // parse it into object JSON
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

// Export methods
module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
