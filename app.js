const fs = require("fs");

// fs.writeFileSync("notes.txt", "My name is Tanimara!");
fs.appendFileSync(
  "notes.txt",
  "I am a junior software developer and I love to learn Node JS!"
);
