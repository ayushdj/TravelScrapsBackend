const mongoose = require('mongoose');
const schema = require('./schema');
const model = mongoose.model('EventModel', schema);
module.exports = model;
