const fs = require("fs");

const getNotes = function () {
  return "Your notes...";
};
const removeNote = function (title, body) {
  const notes = loadNotes();
  const removeNote = notes.filter(function (note) {
    return note.title === title;
  });
  if (removeNote.length !== 0) {
    notes.pop({
      title: title,
    });
    saveNotes(notes);
    console.log("Note deleted");
  } else {
    console.log("Title non existent");
  }
};
// Load in the notes
const addNote = function (title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(function (note) {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    // Change notes
    notes.push({
      title: title,
      body: body,
    });

    // Save notes
    saveNotes(notes);
    console.log("New note added!");
  } else {
    console.log("Note title taken!");
  }
};

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = function () {
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
};
