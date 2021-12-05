const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    events: Array,
    person: String
}, {collection: 'calendar'});
module.exports = schema;