const model = require('./model');

const createScrapPost = (post) =>
    model.create(post);

const updatePost = (id, newPost) =>
    model.updateOne({_id: id},
        {$set: newPost});

const findPostById = (id) =>
    model.findById(id);

// delete profile
const deletePostById = (id) =>
    model.deleteOne({_id:id});

const findAllPosts = () =>
    model.find();

module.exports = {
    createScrapPost, updatePost, findPostById, deletePostById, findAllPosts
}