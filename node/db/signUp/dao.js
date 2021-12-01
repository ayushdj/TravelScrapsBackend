const model = require('./model');


const createPerson = (person) =>
    model.create(person);

const updateProfile = (id, newProfile) =>
    model.updateOne({_id: id},
        {$set: newProfile});

const findProfileById = (id) =>
    model.findById(id);

// delete profile

module.exports = {
    createPerson, updateProfile, findProfileById
};