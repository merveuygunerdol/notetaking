const fs = require('fs');
const noteModel = require('../models/note-model');

const dbPath = `${__dirname}/../notes-data.json`;

async function findAll() {
  return noteModel.find().populate('todo').sort({ id: -1 });
}

async function add(note) {
  return noteModel.create(note);
}

async function del(id) {
  return noteModel.remove({ id });
}

async function update(id, note) {
  const noteId = { id };
  const newNote = { $set: note };
  noteModel.updateOne(noteId, newNote, (err, res) => {
    if (err) throw err;
  });
}

async function find(id) {
  return noteModel.findOne({ id }).populate('todo');
}

module.exports = {
  findAll,
  find,
  add,
  del,
  update,
};
