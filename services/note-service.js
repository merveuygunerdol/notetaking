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

async function find(id) {
  return noteModel.findOne({ id });
}

module.exports = {
  findAll,
  find,
  add,
  del,
};
