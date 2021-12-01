const model = require('./model');

const updateCountDown = (id, date) =>
    model.updateOne({_id: id},
        {$set: date});

const findCountDownById = (id) =>
    model.findById(id);

module.exports = {
    updateCountDown,
    findCountDownById
};


