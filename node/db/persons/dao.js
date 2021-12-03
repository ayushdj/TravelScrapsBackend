const model = require('./model');


const createPerson = (person) =>
    model.create(person);

const findPersonById = (id) => model.findById(id);

module.exports = {
    createPerson, findPersonById
};


