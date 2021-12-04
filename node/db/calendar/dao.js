const model = require('./model');

const findCountCalendarByPersonId = (id) =>
    model.findById(id);

module.exports = {
    findCountCalendarByPersonId
};