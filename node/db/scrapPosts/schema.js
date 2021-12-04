const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    userName:String,
    title: String,
    location: String,
    tags: Array,
    text: String,
    travelPlan: String,
    images: Array,
    Comments: Array,
}, {collection: 'scrapPosts'})
module.exports = schema;