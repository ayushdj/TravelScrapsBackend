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

    // const findProfileByUsername = (req, res) =>
    //     dao.findProfileByUsername(req.params.username, req.params.password)
    //         .then(profile => res.json(profile[0]));

    const findProfileByUsername = (req, res) =>
        dao.findProfileByUsername(req.params.username)
            .then(profile => res.json(profile[0]));


    const login = (req, res) => {
        dao.findProfileByUsername(req.body)
            .then(user => {
                if(user) {
                    req.session['currUser'] = user;
                    res.json(user);
                    return;
                }
                res.sendStatus(403);
            })
    }

    const register = (req, res) => {
        dao.findProfileByUsername(req.body)
            .then(user => {
                if(user) {
                    res.sendStatus(404);
                    return;
                }
                createPerson(req.body)
                    .then(user => {
                        req.session['currUser'] = user;
                        res.json(user)
                    });
            })
    }

    const getCurrentUser = (req, res) =>
        res.json(req.session['currUser']);

    const logout = (req, res) =>
        res.send(req.session.destroy());

    app.post('/api/login', login);
    app.post('/api/register', register);
    app.post('/api/currUser', getCurrentUser);
    app.post('/api/logout', logout);

    app.post("/db/person", createPerson);
    app.get("/db/person/:id", findProfileById);
    app.put('/db/person/:id', updateProfile);
    app.get("/db/person/:username/:password", findProfileByUsername);
    app.get
}