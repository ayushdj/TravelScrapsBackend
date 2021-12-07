const mongoose = require('mongoose');
const schema = require('./schema');
const model = mongoose.model('WeatherModel', schema);
module.exports = model;
