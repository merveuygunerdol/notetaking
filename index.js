const axios = require('axios');
const express = require('express');
const note = require('./models/note-model');
const database = require('./database');

const app = express();
app.get('/', (req, res, next) => {
  res.send('HELLO MY FIRST WEB APP PROJECT');
});

app.listen(3030, () => {
  console.log('Server Listening');
});

const newNote = new note('note1', 'body1');
const newNote2 = new note('note2', 'body2');
const notes = [newNote, newNote2];

// database.save(notes, (err) => {
//   console.log('Notes are saved to database');
// });

// database.save(notes);

// const loadedNotes = database.load();
// const loadedNotesFromDb = loadedNotes.map(note.create);
// loadedNotesFromDb[0].printTitle();
// loadedNotesFromDb[0].printBody();
// loadedNotesFromDb[1].printTitle();
// loadedNotesFromDb[1].printBody();
