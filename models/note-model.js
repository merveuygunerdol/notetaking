const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const noteSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    // required: true,
  },
  todo: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Note',
  }],
});
noteSchema.plugin(AutoIncrement, { inc_field: 'id' });
module.exports = mongoose.model('Note', noteSchema);
