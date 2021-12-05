const dao = require('./dao');

module.exports = (app) => {

    const createComment = (req, res) =>
        dao.createComment(req.body).
        then((insertedPost) => res.json(insertedPost));

    const updateComment = (req, res) =>
        dao.updateComment(req.params.id, req.body).then(status => res.send(status));

    const findCommentById = (req, res) =>
        dao.findCommentById(req.params.id, req.body).then(post => res.json(post));

    const deleteCommentById = (req, res) =>
        dao.deleteCommentById(req.params.id, req.body).then((status) => res.send(status));

    const findAllComments = (req, res) =>
        dao.findAllComments.then(posts => res.json(posts));

    app.post("/db/comments", createComment);
    app.put("/db/comments/:id", updateComment);
    app.get("/db/comments/:id", findCommentById);
    app.delete("/db/comments/:id", deleteCommentById);
    app.get("/db/comments/", findAllComments);
}