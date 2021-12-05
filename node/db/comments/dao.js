const model = require('./model');

const createComment = (comment) =>
    model.create(comment);

const updateComment = (id, newComment) =>
    model.updateOne({_id: id},
        {$set: newComment});

const findCommentById = (id) =>
    model.findById(id);

// delete profile
const deleteCommentById = (id) =>
    model.deleteOne({_id:id});

const findAllComments = () =>
    model.find();

module.exports = {
    createComment, updateComment, findCommentById, deleteCommentById, findAllComments
}