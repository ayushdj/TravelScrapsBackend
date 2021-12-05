const model = require('./model');

const findAllEvent = () => model.find();

const deleteEvent = (id) => {
    return model.deleteOne({_id: id})};

const createEvent = (event) =>
    model.create(event);

const findEventById = (id) =>
    model.findById(id);

const updateEvent = (id, event) =>
    model.updateOne({_id: id},
        {$set: event});


module.exports = {
    findAllEvent, deleteEvent, createEvent,
    findEventById, updateEvent
};
