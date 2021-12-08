const dao = require('./dao')

module.exports = (app) => {

    const createCountDown = (req, res) =>
        dao.createCountDown(req.body)
            .then((countdown) => res.json(countdown));

    app.post("/db/countdown/service", createCountDown);


    const updateCountDown = (req, res) =>
        dao.updateCountDown(req.params.id, req.body)
            .then(status => res.send(status));

    app.put("/db/countdown/service/:id", updateCountDown);

    const findCountDownById = (req, res) =>
        dao.findCountDownById(req.params.id)
            .then(count => res.json(count));

    app.get("/db/countdown/service/:id", findCountDownById);

}
