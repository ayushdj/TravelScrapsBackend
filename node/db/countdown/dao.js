const model = require('./model');

const createCountDown = (countDown) =>
    model.create(countDown);


const updateCountDown = (id, date) =>
    model.updateOne({_id: id},
        {$set: date});

const findCountDownById = (id) =>
    model.find({

        person: id
    });

module.exports = {
    createCountDown,
    updateCountDown,
    findCountDownById
};


