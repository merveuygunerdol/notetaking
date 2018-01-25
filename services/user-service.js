const fs = require('fs');
const userModel = require('../models/user-model');

async function findAll() {
  return userModel.find();
}

async function add(user) {
  return userModel.create(user);
}
async function del(id) {
  return userModel.remove({ id });
}

async function find(id) {
  return userModel.findOne({ id });
}

module.exports = {
  findAll,
  find,
  add,
  del,
};
