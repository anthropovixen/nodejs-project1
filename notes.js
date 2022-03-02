const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
  return "Your notes...";
};

// Load in the notes
const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    // Change notes
    notes.push({
      title: title,
      body: body,
    });

    // Save notes
    saveNotes(notes);
    console.log(chalk.green.inverse("New note added!"));
  } else {
    console.log(chalk.red.inverse("Note title taken!"));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const removeNote = notes.filter((note) => note.title !== title);

  if (notes.length > removeNote.length) {
    console.log(chalk.green.inverse("Note removed"));
    saveNotes(removeNote);
  } else {
    console.log(chalk.red.inverse("No note found"));
  }
};
const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.blue.inverse("Your notes"));
  notes.forEach((note) => {
    console.log(note.title);
  });
};

const readNote = (title) => {
  const notes = loadNotes();
  const readNote = notes.find((note) => note.title === title);
  if (readNote) {
    console.log(chalk.blue.inverse(readNote.title));
    console.log(readNote.body);
  } else {
    console.log(chalk.red.inverse("Note not found!"));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
