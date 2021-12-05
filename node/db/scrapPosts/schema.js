const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    title: String,
    location: String,
    tags: Array,
    text: String,
    travelPlan: String,
    images: Array,
    comments: Array,
    person: String,
}, {collection: 'scrapPosts'})
module.exports = schema;