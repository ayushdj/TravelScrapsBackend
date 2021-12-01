const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    person: String,
    date: String
}, {collection: 'countdown'});
module.exports = schema;
