const axios = require('axios');
const express = require('express');
const note = require('./models/note-model');
const database = require('./database');
const noteservice = require('./services/note-services');

const app = express();
app.set('view engine', 'pug');

app.get('/', async(req, res, next) => {
  res.render('index');
  // res.send(await noteservice.findAll());
});
app.get('/notes/all', async (req, res, next) => {
  const notes = await noteservice.findAll();
  res.render('note', { notes });
}); // we want to fetch list of notes

app.listen(3030, () => {
  console.log('Server Listening');
});

const newNote = new note(0, 'note1', 'body1');
const newNote2 = new note(1, 'note2', 'body2');
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
