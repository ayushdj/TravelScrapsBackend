const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    date: String,
    events: Array,
    person: String
}, {collection: 'calendar'});
module.exports = schema;