const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  fullname: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);
