const express = require('express');
const bodyparser = require('body-parser');
const axios = require('axios');
const note = require('./models/note-model');
const database = require('./database');
const noteservice = require('./services/note-service');

const app = express();
app.use(bodyparser.json());
app.set('view engine', 'pug');

app.get('/', async(req, res, next) => {
  res.render('index');
  // res.send(await noteservice.findAll());
});
app.get('/notes/all', async (req, res, next) => {
  const notes = await noteservice.findAll();
  res.render('note', { notes });
}); // we want to fetch list of notes

app.post('/note', async (req, res, next) => {
  const note = await noteservice.add(req.body);
  res.send(note);
});

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
