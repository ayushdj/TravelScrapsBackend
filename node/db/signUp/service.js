const dao = require('./dao')

module.exports = (app) => {

    const createPerson = (req, res) =>
        dao.createPerson(req.body)
            .then((insertedPerson) => res.json(insertedPerson));

    const updateProfile = (req, res) =>
        dao.updateProfile(req.params.id, req.body)
            .then(status => res.send(status));

    const findProfileById = (req, res) =>
        dao.findProfileById(req.params.id)
            .then(profile => res.json(profile));

    app.post("/db/person", createPerson);
    app.get("/db/person/:id", findProfileById);
    app.put('/db/person/:id', updateProfile);
}