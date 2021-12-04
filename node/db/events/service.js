const dao = require('./dao')

module.exports = (app) => {

    const findAllEvent = (req, res) =>
        dao.findAllEvent()
            .then(Event => res.json(Event));

    app.get("/db/event/service", findAllEvent);

    const deleteEvent = (req, res) =>
        dao.deleteEvent(req.params.id)
            .then((status) => res.send(status));

    app.delete("/db/event/service/:id", deleteEvent);

    const createEvent = (req, res) =>
        dao.createEvent(req.body)
            .then((insertedEvent) => res.json(insertedEvent));

    app.post("/db/event/service", createEvent);

    const findEventById = (req, res) =>
        dao.findEventById(req.params.id)
            .then(event => res.json(event));

    app.get("/db/event/service/:id", findEventById);

    const updateEvent = (req, res) =>
        dao.updateEvent(req.params.id, req.body)
            .then(status => res.send(status));

    app.put("/db/event/service/:id", updateEvent);

}
