const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    userName: String,
    email: String,
    password: String,
    dateOfBirth: {type: String, defaultValue: Date.now},
    type:String,
    comments:Array,
    scrapPosts:Array,
    likes: Array,
    bio : {type:String, defaultValue:""},
    website : {type: String, defaultValue: ""},
    profilePicture : {type: String, defaultValue: "../../../images/profile-default.png"},
    bannerPicture : {type: String, defaultValue: "../../../images/banner-default.jpg"},
    location: {type: String, defaultValue: ""},
}, {collection: 'persons'});
module.exports = schema;