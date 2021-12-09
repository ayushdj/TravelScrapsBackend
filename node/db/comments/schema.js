const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    text:String,
    person:String,
    post:String,
    profilePicture: String
}, {collection: 'comments'})
module.exports = schema;