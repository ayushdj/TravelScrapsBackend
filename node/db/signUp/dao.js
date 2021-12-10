const model = require('./model');


const createPerson = (person) =>
    model.create(person);

const updateProfile = (id, newProfile) =>
    model.updateOne({_id: id},
        {$set: newProfile});

const findProfileById = (id) =>
    model.findById(id);

const findByType = (type) =>
    model.find({type: type})

// const findProfileByUsername = (username, password) =>
//     model.find({userName: username, password: password});

const findProfileByUsername = (username) =>
    model.find({userName: username});

// delete profile
const deleteProfileById = (id) =>
    model.deleteOne({_id:id});




module.exports = {
    createPerson, updateProfile, findProfileById, findProfileByUsername, deleteProfileById, findByType
};