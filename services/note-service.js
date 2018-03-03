const fs = require('fs');
const noteModel = require('../models/note-model');

const dbPath = `${__dirname}/../notes-data.json`;

async function findAll() {
  return noteModel.find().populate('todo').limit(5);
}

async function add(note) {
  return noteModel.create(note);
}

async function del(id) {
  return noteModel.remove({ id });
}

async function find(id) {
  return noteModel.findOne({ id }).populate('todo');
}

module.exports = {
  findAll,
  find,
  add,
  del,
};
