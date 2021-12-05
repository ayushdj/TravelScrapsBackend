const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    date: String,
    title: String
}, {collection: 'events'});
module.exports = schema;