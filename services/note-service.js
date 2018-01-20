const fs = require('fs');
const noteModel = require('../models/note-model');
const dbPath = `${__dirname}/../notes-data.json`;

async function findAll() {
  return noteModel.find();
}

async function add(note) {
  return noteModel.create(note);
}

async function del(id) {
  return noteModel.remove({ id });
}

async function find(noteid) {
  const allNotes = await findAll();
  return allNotes.find(n => n.id == noteid);
}

async function saveAll(notes) {
  return new Promise((resolve, reject) => {
    fs.writeFile(dbPath, JSON.stringify(notes), (err, file) => {
      if (err) return reject(err);
      resolve();
    });
  });
}

module.exports = {
  findAll,
  find,
  add,
  del,
};
