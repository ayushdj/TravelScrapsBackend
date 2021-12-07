const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    location: String,
    temp: String,
    description: String,
    humidity: String,
    wind: String
}, {collection: 'weather'});
module.exports = schema;
