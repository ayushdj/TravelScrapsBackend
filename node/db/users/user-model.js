const mongoose = require('mongoose');
const userSchema = require('./user-schema');
const personModel = mongoose
  .model('PersonModel', userSchema);
module.exports = personModel;
