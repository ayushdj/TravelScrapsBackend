const model = require('./model');

const findAllWeather = () => model.find();

const createWeather = (carousel) =>
    model.create(carousel);

const resetWeather = () =>
    model.remove({})



module.exports = {
    findAllWeather, createWeather, resetWeather
};


