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

    const findByType = (req, res) =>
        dao.findByType(req.params.type)
            .then(profileList => res.json(profileList))
            .catch(error => res.send(error))

    // const findProfileByUsername = (req, res) =>
    //     dao.findProfileByUsername(req.params.username, req.params.password)
    //         .then(profile => res.json(profile[0]));

    const findProfileByUsername = (req, res) =>
        dao.findProfileByUsername(req.params.username)
            .then(profile => res.json(profile[0]));


    const deleteProfile = (req, res) =>
        dao.deleteProfileById(req.params.id).then((status) => res.send(status));

    // app.post('/api/login', login);
    // app.post('/api/register', register);
    // app.post('/api/currUser', getCurrentUser);
    // app.post('/api/logout', logout);

    app.post("/db/person", createPerson);
    app.get("/db/person/:id", findProfileById);
    app.put('/db/person/:id', updateProfile);
    app.get("/db/person/:username/:password", findProfileByUsername);
    app.delete("/db/person/:id", deleteProfile)

    app.get("/db/type/:type", findByType);
}