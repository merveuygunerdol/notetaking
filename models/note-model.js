const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const noteSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});
noteSchema.plugin(AutoIncrement, { inc_field: 'id' });
module.exports = mongoose.model('Note', noteSchema);
