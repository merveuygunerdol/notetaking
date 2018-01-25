const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
userSchema.plugin(AutoIncrement, { inc_field: 'user_id' });
module.exports = mongoose.model('User', userSchema);
