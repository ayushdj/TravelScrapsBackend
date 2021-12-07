const dao = require('./dao')

module.exports = (app) => {

    const findAllWeather = (req, res) =>
        dao.findAllWeather()
            .then(Weather => res.json(Weather));

    app.get("/db/weather/service", findAllWeather);

    const createWeather = (req, res) =>
        dao.createWeather(req.body)
            .then((insertedWeather) => res.json(insertedWeather));

    app.post("/db/weather/service", createWeather);


    const resetWeather = (req, res) =>
        dao.resetWeather()
            .then(status => res.send(status));

    app.delete("/db/weather/service/reset", resetWeather);


}
