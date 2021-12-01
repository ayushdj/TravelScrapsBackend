const mongoose = require('mongoose');
const schema = require('./schema');
const model = mongoose.model('CountDownModel', schema);
module.exports = model;
