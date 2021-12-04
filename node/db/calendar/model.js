const mongoose = require('mongoose');
const schema = require('./schema');
const model = mongoose.model('CalendarModel', schema);
module.exports = model;
