const model = require('./model');

const findCountCalendarByPersonId = (id) =>
    model.find({person: id});

const createCalendar = (calendar) =>
    model.create(calendar);

const updateCalendar = (id, newCalendar) =>
    model.updateOne({_id: id},
        {$set: newCalendar});

module.exports = {
    findCountCalendarByPersonId, createCalendar, updateCalendar
};