const note = require('./note');
const database = require('./database');

const newNote = new note('note1', 'body1');
const newNote2 = new note('note2', 'body2');
const notes = [newNote, newNote2];

database.save(notes);

const loadedNotes = database.load();
