const mongoose = require('mongoose');
const schema = require('./schema');
const model = mongoose.model('ScrapPostsModel', schema);
module.exports = model;