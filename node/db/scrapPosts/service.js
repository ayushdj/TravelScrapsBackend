const dao = require('./dao');

module.exports = (app) => {

    const createPost = (req, res) =>
        dao.createScrapPost(req.body).
        then((insertedPost) => res.json(insertedPost));

    const updatePost = (req, res) =>
        dao.updatePost(req.params.id, req.body).then(status => res.send(status));

    const findPostById = (req, res) =>
        dao.findPostById(req.params.id, req.body).then(post => res.json(post));

    const deletePostById = (req, res) =>
        dao.deletePostById(req.params.id, req.body).then((status) => res.send(status));

    const findAllPosts = (req, res) =>
        dao.findAllPosts().then(posts => res.json(posts));

    app.post("/db/posts", createPost);
    app.put("/db/posts/:id", updatePost);
    app.get("/db/posts/:id", findPostById);
    app.delete("/db/posts/:id", deletePostById);
    app.get("/db/posts/", findAllPosts);
}