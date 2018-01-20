const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
  title: String,
  body: String,
});
module.exports = mongoose.model('Note', noteSchema);
