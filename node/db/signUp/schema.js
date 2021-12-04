const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    handle: String,
    emailAddress: String,
    password: String,
    dateOfBirth: {type: Date, defaultValue: Date.now},
    bio : {type:String, defaultValue:""},
    website : {type: String, defaultValue: ""},
    profileImage : {type: String, defaultValue: "../../../images/profile-default.png"},
    bannerImage : {type: String, defaultValue: "../../../images/banner-default.jpg"},
    location: {type: String, defaultValue: ""},
    dateJoined: {type:Date, defaultValue:Date.now},
    followingCount: {type: Number, defaultValue: 0},
    followersCount:{type: Number, defaultValue: 0},
}, {collection: 'persons'});
module.exports = schema;