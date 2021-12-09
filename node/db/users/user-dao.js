const userModel = require('./user-model');

const findAllUsers = () => {
    return userModel.find()
};

const findUserById = (userId) =>
  userModel.findOne({_id : userId});

const findByUsernameAndPassword = ({userName, password}) =>
  userModel.findOne({userName, password});

const findByUsername = ({userName}) =>
  userModel.findOne({userName});

const createUser = (user) =>
  userModel.create(user);

const updateUser = (user) =>
  userModel.updateOne({_id: user._id}, {
    $set: user
  });

const deleteUser = (userId) =>
  userModel.deleteOne({_id: userId});

module.exports = {
  findByUsername, findAllUsers, findUserById,
  findByUsernameAndPassword,
  createUser, updateUser, deleteUser
};
