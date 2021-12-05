const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    date: String,
    event: String
}, {collection: 'events'});
module.exports = schema;