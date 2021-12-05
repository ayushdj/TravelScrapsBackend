const model = require('./model');

const findCountCalendarByPersonId = (id) =>
    model.find({person: id});

const createCalendar = (calendar) =>
    model.create(calendar);

module.exports = {
    findCountCalendarByPersonId, createCalendar
};