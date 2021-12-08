const model = require('./model');

const updateCountDown = (id, date) =>
    model.updateOne({_id: id},
        {$set: date});

const findCountDownById = (id) =>
    model.find({

        person: id
    });

module.exports = {
    updateCountDown,
    findCountDownById
};


