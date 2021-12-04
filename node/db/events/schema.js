const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    date: String,
    travelPlan: Array,
    eventName: String
}, {collection: 'events'});
module.exports = schema;