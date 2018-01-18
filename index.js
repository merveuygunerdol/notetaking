const note = require('./note');
const database = require('./database');

const newNote = new note('note1', 'body1');
const newNote2 = new note('note2', 'body2');
const notes = [newNote, newNote2];

database.save(notes);

const loadedNotes = database.load();
const loadedNotesFromDb = loadedNotes.map(note.create);
loadedNotesFromDb[0].printTitle();
loadedNotesFromDb[0].printBody();
loadedNotesFromDb[1].printTitle();
loadedNotesFromDb[1].printBody();
