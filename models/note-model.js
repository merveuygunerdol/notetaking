const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const noteSchema = mongoose.Schema({
  title: String,
  body: String,
});
noteSchema.plugin(AutoIncrement, { inc_field: 'id' });
module.exports = mongoose.model('Note', noteSchema);
